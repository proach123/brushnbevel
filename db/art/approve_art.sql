update artwork
set gallery_approved = $2
where id = $1
returning *;
