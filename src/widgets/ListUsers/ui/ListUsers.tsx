import cls from './ListUsers.module.scss'
import {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUsersData} from "../../../entities/Users/model/selectors/getUsersData/getUsersData";
import {fetchUsers} from "../../../entities/Users/model/services/fetchUsers/fetchUsers";
import {useAppDispatch} from "../../../shared/lib/hooks/useAppDispatch";
import {Album} from "../../Album";
import {Dropdown} from "../../../shared/ui/Dropdown/Dropdown";

interface ListUsersProps{

}

export const ListUsers:FC<ListUsersProps> = () => {
    const dispatch = useAppDispatch();
    const users = useSelector(getUsersData);

    useEffect(() => {
        dispatch(fetchUsers())
    }, []);
    return (

        (users.length
        ? <ul className={cls.ListUsers}>
            {users.map(user => (

                    <Dropdown key={user.id} user={user} />
            ))}
        </ul>
            : (<div>Нет данных о пользователях</div>))
    );
};

export default ListUsers;