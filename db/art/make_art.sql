insert into artwork
(name, description, painting_url, price, artist_id)
values ($1,$2,$3,$4,$5);

select *
from artwork
order by id asc;