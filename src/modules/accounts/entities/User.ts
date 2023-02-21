import { v4 as uuidV4 } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity("users")
export class User {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    username: string;
    
    @Column()
    password: string;
    
    
    @Column()
    email: string;
    
    @Column()
    driver_license: string;
    
    @Column()
    is_admin: boolean;
    
    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidV4();
        }
    }
}