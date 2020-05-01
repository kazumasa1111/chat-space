# README
# chat-space DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|username|string|null: false|
### Association
- has_many :groups, through: :posts_groups
- has_many :posts_groups
- has_many :comments

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|groupname|text|null:false|
### Association
- has_many :users, through: :posts_groups
- has_many :posts_groups
- has_many :comments


## posts_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null:false|
|group_id|integer|null:false|
### Association
- belongs_to :groups
- belongs_to :users

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|image|string|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|postingtime|text|null: false|
### Association
- belongs_to :groups
- belongs_to :users
