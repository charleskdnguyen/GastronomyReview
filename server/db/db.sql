CREATE TABLE restaurants (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check (price_range >= 1 and price_range <= 5)
);

INSERT INTO restaurants (name, location, price_range) VALUES ('McDonalds', 'New York', 2);
INSERT INTO restaurants (name, location, price_range) VALUES ('Pizza Hut', 'Minnesota', 2);
INSERT INTO restaurants (name, location, price_range) VALUES ('Wendys', 'Toronto', 1);

CREATE TABLE reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT check(rating >= 1 and rating <= 5)
);

INSERT INTO reviews (name, restaurant_id, review, rating) VALUES ('Zayn', 2, 'bad', 1);
INSERT INTO reviews (name, restaurant_id, review, rating) VALUES ('Simba', 2, 'great', 4);
INSERT INTO reviews (name, restaurant_id, review, rating) VALUES ('Moka', 2, 'WOW', 5);