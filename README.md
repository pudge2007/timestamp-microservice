# Timestamp Microservice

## User stories:
1. I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
2. If it does, it returns both the Unix timestamp and the natural language form of that date.
3. If it does not contain a date or Unix timestamp, it returns null for those properties.

## Example usage:

```text
https://ib-timestamp.herokuapp.com/1111111111
https://ib-timestamp.herokuapp.com/February%10,%2017
https://ib-timestamp.herokuapp.com/Februar02017
```

## Example output:

```text
{"unixtime":1111111111,"natural":"March 18, 2005"}
{"unixtime":1486684800,"natural":"February 10, 2017"}
{"unixtime":null,"natural":null}
```

#

> #### *Created by Borya Ivchenko.*
> [LinkedIn](https://www.linkedin.com/in/boryaivchenko) | [vk](https://vk.com/borya.ivchenko) | [Site](http://boris.of.by) | [CodePen](https://codepen.io/BoryaIvchenko) | [E-Mail](mailto:borya.ivchenko@mail.ru)
