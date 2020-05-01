# README
# chat-space DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|
### Association
- has_many :groups, through: :posts_groups
- has_many :posts_groups
- has_many :comments

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null:false|
### Association
- has_many :users, through: :posts_groups
- has_many :posts_groups
- has_many :comments


## posts_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null:false, foreign_key: true|
|group_id|integer|null:false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text||
|image|text||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user
