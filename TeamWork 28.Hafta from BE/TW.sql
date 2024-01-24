-- SELECT alb.AlbumId numara, alb.title baslik FROM Album alb;

/*
SELECT a.Title, t.Name TrackName, g.Name GenreName, art.Name ArtistName
FROM Track t
INNER JOIN Album a ON a.AlbumId = t.AlbumId
INNER JOIN Genre g ON g.GenreId = t.GenreId
INNER JOIN Artist art ON art.ArtistId = a.ArtistId;
*/

SELECT * FROM customer
WHERE country = 'USA' ORDER BY customerId DESC
LIMIT 10 OFFSET 5


