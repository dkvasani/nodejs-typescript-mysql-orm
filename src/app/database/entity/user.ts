import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    Timestamp,
    UpdateDateColumn,
    CreateDateColumn,
} from "typeorm";

/**
 * @author Dharmesh Vasani
 */
@Entity()
class User extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: "integer",
        comment: "The id of the user",
    })
    user_id: number;

    @Column({
        type: "varchar",
        comment: "Name of the User",
    })
    name: string;

    @Column({
        type: "varchar",
        comment: "Email of the User",
    })
    email: string;

    @Column({
        type: "varchar",
        comment: "Password of the User",
    })
    password: string;

    @Column({
        type: "varchar",
        comment: "Mobile Number of the User",
    })
    mobile_number: string;

    @CreateDateColumn({
        type: "timestamp",
        comment: "Creation data",
        default: Timestamp,
    })
    created_on: Date;

    @UpdateDateColumn({
        type: "timestamp",
        comment: "Time of Update",
        default: Timestamp,
    })
    updated_on: Date;
}

export default User;