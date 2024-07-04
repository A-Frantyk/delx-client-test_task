import { Text } from '../../shared/Text/Text.tsx';
import { ParcelFilled } from '../../shared/svg/ParcelFilled';
import { Hgryvnia } from '../../shared/svg/Hgryvnia.tsx';
import { Button } from '../../shared/Button/Button.tsx';

import cls from './ParcelDetails.module.css';

export const ParcelDetails = () => {
    return(
        <section>
            <div className={cls.container}>
                <div className={cls.container_icon}>
                    <ParcelFilled addStyle={cls.icon}/>
                </div>
                <div className={cls.container_text}>
                    <Text text={"Electronic products"} addStyle={cls.title}/>
                    <div className={cls.status}>
                        <Button type={"button"} text={"In Transit"} addStyle={cls.button}/>
                        <div className={cls.dot}></div>
                        <div className={cls.price}>
                            <Hgryvnia addStyle={cls.icon_hryvnia}/>
                            <span>200</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}