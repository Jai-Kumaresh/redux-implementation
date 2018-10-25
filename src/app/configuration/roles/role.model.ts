export class Role {
    role_id: number;
    description: string;
    status: string;
    deleted_at: string;

    constructor(role_id?: number,description?: string, status?: string, deleted_at?: string) {
        this.role_id = role_id;
        this.description = description;
        this.status = status;
        this.deleted_at = deleted_at;
    }
}
