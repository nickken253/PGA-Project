import { useNavigate } from "react-router-dom";
import { TableListForm } from "../components/TableListForm";
import { Layout } from "../components/Layout";

export const TableList = () => {
    const navigate = useNavigate();

    return (
        <Layout title="Table List">
            <TableListForm onSuccess={() => navigate("/")} />
        </Layout>
    );
}