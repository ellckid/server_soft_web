module.exports = class UserDto {
    name: string;
    email: string;
    id: number;
    isActivated: boolean;

    constructor(model: any) {
        this.name = model.name;
        this.email = model.email;
        this.id = model._id;
        this.isActivated = model.isActivated;
    }
}
