import cls from "./AddressDelivery.module.css"
import { Text } from '../../shared/Text/Text.tsx';
import { Location } from '../../shared/svg/Location.tsx';
import { Address } from '../../types/contracts.ts';

export const AddressDelivery = ({city, street}: Address) => {
    return (
        <div className={cls.container}>
            <div className={cls.dot}/>
            <div className={cls.container_address}>
                <div className={cls.container_text}>
                    <Text text={city} addStyle={cls.city}/>
                    <Text text={street} addStyle={cls.address}/>
                </div>
                <Location addStyle={cls.icon}/>
            </div>
        </div>
    )
}