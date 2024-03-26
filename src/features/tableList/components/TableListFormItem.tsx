import { ITableListStateItem } from "../../../interfaces/tableList.inteface";
interface ITableListFormItemProps {
  props: ITableListStateItem;
  index: number;
  dataList: ITableListStateItem[];
  setDataList: (dataList: ITableListStateItem[]) => void;
}
import { FORM_STYLES as styles } from "../../../config";
export const TableListFormItems = ({
  props,
  index,
  dataList,
  setDataList,
}: ITableListFormItemProps) => {
  return (
    <div key={index} className="flex flex-col p-2 rounded mb-5 border-2 border-gray-200">
      <input
        className={`${styles.field}` + " mb-2 font-bold text-lg"}
        type="text"
        value={props.title}
        onChange={(e) => {
          const newDataList = [...dataList];
          newDataList[index] = { ...newDataList[index], title: e.target.value };
          setDataList(newDataList);
        }}
      />
      <textarea
        className={styles.field}
        value={props.description}
        onChange={(e) => {
          const newDataList = [...dataList];
          newDataList[index] = {
            ...newDataList[index],
            description: e.target.value,
          };
          setDataList(newDataList);
        }}
      />
    </div>
  );
};
