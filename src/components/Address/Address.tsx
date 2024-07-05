import cls from "./Address.module.css"
import { AddressDelivery } from '../../shared/AddressDelivery/AddressDelivery.tsx';
import { useGetAddressQuery } from '../../store/services/parcelService.ts';

export const Address = () => {
    const {data: address, isLoading: isLoadingAddress} = useGetAddressQuery({})

    if(isLoadingAddress){
        return <div>Loading...</div>
    }
    console.log("address-->", address)
    return (
        <section className={cls.container}>
            <ul className={cls.list}>
                <AddressDelivery/>
                <AddressDelivery/>
            </ul>
        </section>
    )
}