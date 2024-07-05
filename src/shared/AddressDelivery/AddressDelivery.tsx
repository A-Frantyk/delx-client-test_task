import cls from "./AddressDelivery.module.css"
import { Text } from '../../shared/Text/Text.tsx';
import { Location } from '../../shared/svg/Location.tsx';

export const AddressDelivery = () => {
    return (
        <div className={cls.container}>
            <div className={cls.dot}/>
            <div className={cls.container_address}>
                <div className={cls.container_text}>
                    <Text text={"Kyiv"} addStyle={cls.city}/>
                    <Text text={"Yakovenko st. 35"} addStyle={cls.address}/>
                </div>
                <Location addStyle={cls.icon}/>
            </div>
        </div>
    )
}