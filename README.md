Git clone, run `yarn install` (or `npm install`), then `yarn start` (or `npm start`)

## SQL

```
select name as vendor, COUNT(vendor_id) as product_count from vendors 
LEFT JOIN products ON vendors.id=products.vendor_id 
GROUP BY vendor.id ORDER BY product_count DESC;
```