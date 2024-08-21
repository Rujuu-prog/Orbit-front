import {List} from "@mantine/core";
import PendingIcon from "@/components/icon/todo/pendingIcon/PendingIcon";
import DoneIcon from "@/components/icon/todo/doneIcon/DoneIcon";
import axios from "axios";
import useSWR from "swr";

const fetcher = async (url: string) => {
    const response = await axios.get(url);
    return response.data;
};

export default function TodoPage() {
    const { data, error } = useSWR('/api/todo', fetcher);
    console.log(data);

    if (error) return <div>Failed to load tasks</div>;
    if (!data) return <div>Loading...</div>;
    return (
        <List
            spacing="xs"
            size="sm"
            center
            icon={
                <PendingIcon />
            }
        >
            <List.Item>Clone or download repository from GitHub</List.Item>
            <List.Item>Install dependencies with yarn</List.Item>
            <List.Item>To start development server run npm start command</List.Item>
            <List.Item>Run tests to make sure your changes do not break the build</List.Item>
            <List.Item
                icon={
                    <DoneIcon />
                }
            >
                Submit a pull request once you are done
            </List.Item>
        </List>
    );
}
