import { Text } from '../../shared/Text/Text.tsx';
import { ParcelFilled } from '../../shared/svg/ParcelFilled';
import { Hgryvnia } from '../../shared/svg/Hgryvnia.tsx';
import { Button } from '../../shared/Button/Button.tsx';

import cls from './ParcelDetails.module.css';

import { useGetParcelDetailsQuery } from '../../store/services/parcelService';

export const ParcelDetails = () => {
    const {data: parcelDetails, isLoading: isLoadingParcelDetails} = useGetParcelDetailsQuery({})

    if(isLoadingParcelDetails){
        return <div>Loading...</div>
    }

    return(
        <section className={cls.container}>
            <div className={cls.container_icon}>
                <ParcelFilled addStyle={cls.icon}/>
            </div>
            <div className={cls.container_text}>
                <Text text={parcelDetails.name} addStyle={cls.title}/>
                <div className={cls.status}>
                    <Button type={"button"} text={parcelDetails.status} addStyle={cls.button}/>
                    <div className={cls.dot}></div>
                    <div className={cls.price}>
                        <Hgryvnia addStyle={cls.icon_hryvnia}/>
                        <span className={cls.count}>{parcelDetails.deliveryCost}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}