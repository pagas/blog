import * as data  from "../commands/skypey-data-generator";

export default function contacts(state = data.getMessages(10), action) {
    return state;
}