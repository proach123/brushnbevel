update artwork
set name = $2 , description= $3, painting_url= $4, price= $5
where id = $1
returning name, description, painting_url, price;
