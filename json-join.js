Array.prototype.Join = function(right,onLeft,onRight,columns,aliases)
{

    var joined = [];

    this.forEach( function(leftElement)
    {

        right.forEach( function (rightElement)
        {

            if (leftElement[onLeft] == rightElement[onRight])
            {

                var currentElement = JSON.parse(JSON.stringify(leftElement));

                var columnCount = 0;

                columns.forEach(function (column)
                {

                    var writeKey = aliases[columnCount];
                    var writeKeyNumber = 0;

                    while (currentElement.hasOwnProperty(writeKey))
                    {
                        writeKeyNumber ++;
                        writeKey = aliases[columnCount] + writeKeyNumber.toString();
                    }

                    currentElement[writeKey] = JSON.parse(JSON.stringify(rightElement[column]));

                    columnCount ++;

                });

                joined.push(currentElement);
            }

        });

    });

    return joined;

};

Array.prototype.Embed = function(right,field,onLeft,onRight,child)
{

    var embed = [];

    this.forEach( function(leftElement)
    {

        right.forEach( function (rightElement)
        {

            if (leftElement[onLeft] == rightElement[onRight])
            {

                var currentElement = JSON.parse(JSON.stringify(leftElement));

                var columnCount = 0;

                if (!currentElement.hasOwnProperty(field))
                {
                    currentElement[field] = [];
                }

                currentElement[field].push(JSON.parse(JSON.stringify(rightElement)));

                embed.push(currentElement);
            }

        });

    });

    return embed;

};

