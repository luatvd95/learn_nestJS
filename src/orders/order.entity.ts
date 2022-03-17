import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("orders")

export class orderEntity {
@PrimaryGeneratedColumn("increment")
id: number

@Column()
member_id: number

@Column()
tb_user_id: number

@Column()
ali_1688_user_id: string

@Column()
trade_id: string

@Column()
trade_parent_id: string

@Column()
item_id: string

@Column()
item_link: string

@Column()
item_img: string

@Column()
item_title: string

@Column()
item_num: number

@Column()
item_price: number

@Column()
pay_price: number

@Column()
alipay_total_price: number

@Column()
commission_pre_fee: number

@Column()
commission_rate: number

@Column()
commission_fee: number

@Column()
level1: number

@Column()
level2: number

@Column()
add_time: Date

@Column()
settlement_time: Date

@Column()
order_type: string

@Column()
relation_id: string

@Column()
special_id: string

@Column()
status: number

@Column()
old_status: number

@Column()
payment_status: number

@Column()
buyer_type: string

@Column()
settle_status: number

@Column()
right_status: number


@Column()
created_at: Date

@Column()
updated_at: Date

}