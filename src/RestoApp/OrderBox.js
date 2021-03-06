import ButtonOutlined from '../components/ButtonOutlined'

const ItemBox = ({item, deleteOrder}) => {

    const {image, name, price, quantity} = item

    const total = quantity*price;

    return (
        <div className="flex p-1 w-44 my-2 bg-gray-700 rounded-xl shadow-md items-center space-x-4">
            <div className="flex-shrink-0">
                <img className="h-14 w-14" src={image} alt={name} />
            </div>
            <div className="text-gray-300">
                <div className="text-lg font-medium">{name}</div>
                <p className="text-sm">Php {price}</p>
                <p className="text-sm mt-1">Quantity: {quantity}</p>
                <p className="text-sm mt-1">Total: Php {total}</p>
                <ButtonOutlined className="mt-2 ml-2" onClick={() => deleteOrder(item.id)}>-</ButtonOutlined>
            </div>
        </div>
    )

}

export default ItemBox