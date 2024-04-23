-- Creating database with all required actors that is tables and columns.

-- create database breakdown_company;
-- use breakdown_company;

-- create table members
-- 	(
-- 		memberid varchar(20) primary key,
--      memberfname varchar(20),
--      memberlname varchar(20),
--      memberloc varchar(20)
--         );
-- create table vehicle
-- 	(
-- 		vehiclereg varchar(10) primary key,
--      vehiclemake varchar(10),
--      vehiclemodel varchar(10),
--      memberid varchar(10)
--         );
-- create table engineer
-- 	(
-- 		engineerid int primary key,
--      engineerfname varchar(20),
--      engineerlname varchar(20)
--         );
-- create table breakdown
-- 	(
-- 		breakdownid int primary key,
--      vehiclereg varchar(10),
--      engineerid int,
--      breakdowndate date,
--      breakdowntime time,
--      breakdownloc varchar(20)
--         );

-- using alter function to insert foreign keys into the schema.

-- alter table vehicle 
-- add constraint fk_memberid
-- foreign key (memberid) references members(memberid);

-- alter table breakdown
-- add constraint fk_vehiclereg
-- foreign key (vehiclereg) references vehicle(vehiclereg);

-- alter table breakdown
-- add constraint fk_engineerid
-- foreign key (engineerid) references engineer(engineerid);

-- insert into members (memberid, memberfname, memberlname, memberloc)
-- 	values
-- 		('m01', 'donovan', 'burnett', 'exeter'),
--      ('m02', 'jude', 'rexanne', 'wakefield'),
--      ('m03', 'agnes', 'eliott', 'chelmsford'),
--      ('m04', 'royce', 'eldred', 'sheffield'),
--      ('m05', 'allyson', 'landon', 'nottingham');

-- insert into vehicle (vehiclereg, vehiclemake, vehiclemodel, memberid)
-- 	values
-- 		('YA02CEC', 'chevrolet', 'camaro', 'm01'),
-- 		('GV32ACX', 'bmw', 'x5', 'm02'),
--      ('ON09HWP', 'audi', 'r8', 'm02'),
--      ('VB17SWX', 'toyota', 'sequoia', 'm03'),
--      ('YB64FUC', 'gmc', 'terrain', 'm04'),
--      ('BU02GZB', 'seat', 'ibiza', 'm05'),
--      ('NV09URL', 'subaru', 'outback', 'm05'),
--      ('RT12RBG', 'chrysler', 'pacifica', 'm05');

-- insert into engineer (engineerid, engineerfname, engineerlname)
-- 	values
-- 		(001, 'William', 'Michaelson'),
--      (002, 'Marmaduke', 'Davison'),
--      (003, 'Montgomery', 'Shelby');

-- insert into breakdown (breakdownid, vehiclereg, engineerid, breakdowndate, breakdowntime, breakdownloc)
-- 	values
-- 		(0001,'RT12RBG', 001, '2019-10-09', '06:28:00', 'Bath'),
--      (0002,'BU02GZB', 002, '2019-12-10', '09:13:00', 'Exeter'),
--      (0003,'NV09URL', 002, '2020-03-10', '10:27:00', 'Winchester'),
--      (0004,'YB64FUC', 001, '2020-04-14', '02:28:00', 'Southampton'),
--      (0005,'BU02GZB', 001, '2020-09-16', '21:16:00', 'City of Westminster'),
--      (0006,'VB17SWX', 003, '2021-11-24', '22:50:00', 'Sheffield'),
--      (0007,'RT12RBG', 003, '2021-12-07', '03:53:00', 'York'),
--      (0008,'NV09URL', 001, '2021-12-07', '09:05:00', 'Lincoln'),
--      (0009,'ON09HWP', 003, '2022-07-15', '12:45:00', 'Cambridge'),
--      (0010,'GV32ACX', 002, '2022-07-18', '17:56:00', 'Bath'),
--      (0011,'YA02CEC', 001, '2022-07-27', '10:09:00', 'Exeter'),
--      (0012,'YB64FUC', 003, '2023-10-26', '04:49:00', 'Sheffield');

-- use those queries as you need to find data in a given table.

-- select * from breakdown
-- select * from engineer
-- select * from members
-- select * from vehicle

-- Practice of the queries run them as needed

-- select memberfname, memberlname from members where memberloc='exeter';
-- select * from vehicle where vehiclemake='audi';
-- select count(*) as 'Number of engineers' from engineer;
-- select count(*) as 'Number of members' from members;
-- select * from breakdown where breakdowndate>'2022-03-15';
-- select * from breakdown where breakdowndate between '2020-06-15' and '2023-06-15';
-- select count(*) as 'total number of breakdowns' from breakdown where vehiclereg='NV09URL';
-- select vehiclereg, count(*) as 'total number of breakdowns' from breakdown group by vehiclereg having count(*)>1;

-- select m.memberfname, m.memberlname, v.vehiclereg, v.vehiclemake, v.vehiclemodel
-- from members m join vehicle v on m.memberid=v.memberid
-- where m.memberfname='jude';

-- select m.memberfname, m.memberlname, count(v.vehiclereg) as totalvehicles
-- from members m left join vehicle v on m.memberid=v.memberid
-- group by m.memberfname, m.memberlname
-- order by totalvehicles desc;

-- select b.breakdownid, m.memberfname, m.memberlname, v.vehiclereg, v.vehiclemake, v.vehiclemodel, b.breakdowndate, b.breakdowntime
-- from breakdown b
-- join vehicle v on b.vehiclereg=v.vehiclereg
-- join members m on v.memberid=m.memberid
-- where b.breakdownloc='exeter';

-- select b.breakdownid, m.MemberFName, m.MemberLName, v.VehicleReg, v.VehicleMake, v.VehicleModel, e.EngineerFName, e.EngineerLName, b.breakdowndate, b.breakdowntime, b.breakdownloc
-- from breakdown b
-- join vehicle v on b.vehiclereg=v.vehiclereg
-- join members m on v.memberid=m.memberid
-- join engineer e on b.engineerid=e.engineerid
-- where b.breakdowndate between '2022-06-15' and '2023-06-15';

-- select * from vehicle

-- select b.vehiclereg, b.breakdowndate, b.breakdownloc, m.memberfname, m.memberlname, v.vehiclemake, v.vehiclemodel
-- from breakdown b
-- join vehicle v on b.vehiclereg=v.vehiclereg
-- join members m on m.memberid=v.memberid;


-- Members name and car based on name of the vehicle make

-- select m.memberfname, m.memberlname, v.vehiclereg, v.vehiclemake, v.vehiclemodel
-- from members m
-- join vehicle v on m.memberid=v.memberid
-- where v.vehiclemake='audi';


-- list of members with more than 1 breakdonw

-- select m.memberfname, m.memberlname, count(b.breakdownid) as totalbreakdowns
-- from members m
-- join vehicle v on m.memberid = v.memberid
-- join breakdown b on v.vehiclereg = b.vehiclereg
-- group by m.memberfname, m.memberlname
-- having totalbreakdowns > 1;

-- create database engineers_salary;
-- use engineers_salary;

-- creating a table with primary key and details of employees.

-- create table engineer_compensation
-- 	(
-- 		engineerid int primary key,
-- 		fname varchar(25),
-- 		lname varchar(25),
--      salary int
--         );


-- entering data into a table.
-- insert into engineer_compensation (engineerid, fname, lname, salary)
-- 	values
-- 		(0101, 'Steven', 'Irwing', 40000),
--         (0102, 'Elvis', 'Presley', 55000),
--         (0103, 'Steven', 'Hawkings', 45000),
--         (0104, 'Henry', 'Ford', 60000),
--         (0105, 'Enzo', 'Ferrarri', 70000),
--         (0106, 'Marie', 'Curie', 45000);

-- select * from engineer_compensation;

-- functions for avg, max, min and sum allow for manipulation of numerical data and returning desires values. 
-- avg returns average value of given numbers.
-- max returns highest value.
-- min returns lowest value.
-- sum adds all of the give values together for a grand total.

-- select avg(salary) as AverageSalary from engineer_compensation;
-- select max(salary) as MaxSalary from engineer_compensation;
-- select min(salary) as MaxSalary from engineer_compensation;
-- select sum(salary) as TotalSalaryPerYear from engineer_compensation;

-- use breakdown_company;
-- select * from members;
-- select * from vehicle;

-- this here is a procedure to pull data and create entirely new data from the existing one after which it is immediately gotten rid of.
-- procedures are useful as they can be stored within the database and played at any time.

-- delimiter $$

-- create procedure displaypolicy()
-- begin
--     declare carcount int;
--     create temporary table if not exists carcounts (
--         member_id varchar(20),
--         numberofcars int
--     );

--     insert into carcounts (member_id, numberofcars)
--     select memberid, count(*)
--     from vehicle
--     group by memberid;

--     select m.memberid, 
--            m.memberfname, 
--            m.memberlname, 
--            case
--                when cc.numberofcars > 1 then 'Multi-car policy'
--                else 'Single-car-policy'
--            end as Policy
--     from members m
--     left join carcounts cc on m.memberid = cc.member_id;
--     drop temporary table if exists carcounts;
-- end $$

-- delimiter ;
-- call displaypolicy();

-- use company;
-- select * from employee;

-- updating the data of the existing employee already implemented.

-- update employee set dno=1
-- where ssn=123456789;

-- delete data from employee table has not been implemented but ready to use.

-- delete from employee
-- where ssn=123456789;


