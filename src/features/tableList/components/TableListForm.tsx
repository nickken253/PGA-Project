import { useDispatch, useSelector } from "react-redux";
import { setTableList, RootState, AppDispatch } from "../../../stores";
import {
  ITableListStateItem,
  ITableListState,
} from "../../../interfaces/tableList.inteface";
import { useEffect, useState } from "react";
import { Button } from "../../../components/Buttons";
import { TableListFormItems } from "./TableListFormItem";
import { notify } from "../../../components/notification";
import storage from "../../../utils/storage";
import { useNavigate } from "react-router-dom";

interface TableListFormProps {
  onSuccess: () => void;
}
const handleLogout = () => {
  storage.remove("token");
  notify({ type: "success", mess: "Đăng xuất thành công !" });
};
export const TableListForm = ({ onSuccess }: TableListFormProps) => {
  const { tableList } = useSelector<RootState, ITableListState>(
    (state) => state.tableList
  );
  const dispatch = useDispatch<AppDispatch>();
  const [dataList, setDataList] = useState<ITableListStateItem[]>(tableList);
  const handleReset = () => {
    setDataList(tableList);
    notify({ type: "success", mess: "Reset !" });
    console.log("Reset", dataList);
  };
  const handleConfirm = () => {
    dispatch(setTableList({ tableList: dataList }));
    notify({ type: "success", mess: "Cập nhật thành công !" });
    console.log("Confirm", dataList);
  };
  useEffect(() => {
    setDataList(tableList);
  }, [tableList]);
  // debugger;
  const token = storage.get("token");
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="p-5 pt-20 bg-white rounded-3xl drop-shadow-lg md:w-[600px]">
        <div className="flex collumns-2 gap-2">
          <div className="w-full">
            <Button onClick={handleReset} label="Reset" style="register" />
          </div>
          <div className="w-full">
            <Button onClick={handleConfirm} label="Confirm" style="login" />
          </div>
        </div>
        {dataList.map((item, index) => (
          <div key={index} className="w-full">
            <TableListFormItems
              props={item}
              index={index}
              dataList={dataList}
              setDataList={setDataList}
            />
          </div>
        ))}
        <div className="columns-5">
          {token && (
            <Button
              label="Logout"
              onClick={() => {
                handleLogout();
                navigate("/");
              }}
              style="logout"
            />
          )}
        </div>
      </div>
    </div>
  );
  //   return <div>ABC</div>;
};
