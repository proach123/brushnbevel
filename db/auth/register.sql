insert into users (username, password, balance, user_img)
values (${username},${password},0,'https://img.icons8.com/dusk/64/000000/picture.png')
returning artist_id, username, balance, user_img
