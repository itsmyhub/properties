Booking Issues:
* Function <generateBlockedPeriods> needs to be fixed...
* User can not book multiple properties with different CheckIn Dates
*   System overwrite the previous booking even if the property is different as long as its the same user.
*   Once record per booking only?
*   System also does not block previous months dates if shows up in calendar for partial calendar [last month dates + this month dates] (Today is 10 the 01-09 is blocked but all previous month dates are open along with current month dates from 11-30/31 )
//
// When booking property, check to see if user is booking multiple properties with same checkIn date
//  if not then allow to add multiple properties bookings for user. 
//  warn the user, he already have another property for the same CheckIn date...
//


### Starting prisma studio
`$ npx prisma studio`

devusr@bgreenhomz:/var/www/dev/ezhome/properties$  npx prisma studio    
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Prisma Studio is up on http://localhost:5556
┌─────────────────────────────────────────────────────────┐
│  Update available 5.22.0 -> 6.2.1                       │
│                                                         │
│  This is a major update - please follow the guide at    │
│  https://pris.ly/d/major-version-upgrade                │
│                                                         │
│  Run the following to update                            │
│    npm i --save-dev prisma@latest                       │
│    npm i @prisma/client@latest                          │
└─────────────────────────────────────────────────────────┘
^C

