import Chance from "chance";

const chance = new Chance();

export const randomData = () => {
    const data = {
        name : chance.name(),
        city : chance.city(),
    }
    console.log(data.name, data.city);
    return data;
}