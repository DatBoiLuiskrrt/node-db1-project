-- Database Queries

-- Find all customers with postal code 1010
SELECT * FROM Customers where postalcode = '1010';
-- Find the phone number for the supplier with the id 11
SELECT phone FROM Suppliers where supplierid = 11;
-- List first 10 orders placed, sorted descending by the order date
SELECT top 10 * FROM Orders order by orderdate desc;
-- Find all customers that live in London, Madrid, or Brazil
SELECT * FROM Customers where city in ('London', 'Madrid','Brazil') order by customerid asc;
-- Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"
insert into customers (customername, contactname, address, city, postalcode, country) values ("Alfredo Ramos Sex Shop", "Alfredo Ramos", "Avda. de la Constitucion 2426", "Mexico D.F.", "05024", "Mexico"); 
-- Update Bilbo Baggins record so that the postal code changes to "11122"
update customers set postalcode = '696969' where contactname = 'Alfredo Ramos';
-- (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted
select count(distinct city) as numOfDistinctTable from customers;
-- (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name
SELECT * FROM [Suppliers] where length(contactname) > 20;