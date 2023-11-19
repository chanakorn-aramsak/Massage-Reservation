docker exec massage_mongodb mongodump --db test --out /dump
docker cp massage_mongodb:/dump ./