# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# README

# Chat-space DB設計

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## usersテーブル

|Column|Type|Option|
|------|----|------|
|email|string|null: false, unique: true|
|name|string|null:false, unique: true|
|password|string|null:false|

### Association
- has_many :massages
- has_many :groups, through: :messages
- has_many :groups_users


## groupsテーブル

|Column|Type|Option|
|------|----|------|
|name|string|unique: true, null: false|

### Association
- has_many :messages 
- has_many :users, through: :groups_users
- has_many :groups_users


## messagesテーブル

|Column|Type|Option|
|------|----|------|
|text|text||
|image|text||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group


