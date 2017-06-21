export class ToDo {
    name?: string;
    done?: boolean;
    id: number;
    deleted?: boolean;
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.done = false;
        this.deleted = false;
    }

    clear() {
        this.name = '';
        this.id = 0;
    }
}