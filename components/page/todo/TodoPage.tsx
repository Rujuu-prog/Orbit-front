import {List} from "@mantine/core";
import PendingIcon from "@/components/icon/todo/pendingIcon/PendingIcon";
import DoneIcon from "@/components/icon/todo/doneIcon/DoneIcon";

export default function TodoPage() {
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
