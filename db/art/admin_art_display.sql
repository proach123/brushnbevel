select u.artist_id, u.username, a.name, a.description, a.painting_url, a.price, a.gallery_approved, a.id
from artwork a
join users u on u.artist_id = a.artist_id
order by username
