import Item from "../Item/Item";

const ItemList = ({ products }) => {
    return (
        <div className="item-list-container__list">
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    );
}

export default ItemList