# README
# chat-space DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|username|string|null: false|
### Association
- has_many :group, through: :post_group
- has_many :post_group
- has_many :comments

groupテーブル
|Column|Type|Options|
|------|----|-------|
|groupname|text|null:false|
|user_id|integer|null:false|
### Association
- has_many :user, through: :post_group
- has_many :posts_group
- has_many :comments


## posts_groupテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null:false|
### Association
- belongs_to :group
- belongs_to :user

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|image|string|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|postingtime|text|null: false|
### Association
- belongs_to :group
- belongs_to :user
