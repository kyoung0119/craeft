export default class ArrayHelper {
    static findById(
        array,
        id
    ) {
        return array.find((obj) => obj.id === id);
    }

    static removeItem(
        array,
        item
    ) {
        return array.splice(array.indexOf(item), 1)
    }

    static wipeItem(
        array,
        item
    ) {
        return array[array.indexOf(item)] = null
    }
}