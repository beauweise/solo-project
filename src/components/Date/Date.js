import React, { Component } from 'react';
import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
// import React, { Component } from 'react';
import { DropdownDate, DropdownComponent } from 'react-dropdown-date';


const formatDate = (date) => {	// formats a JS date to 'yyyy-mm-dd'
  let d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}



class Date extends Component {
  constructor(props) {
    super(props);
    this.state = { date: null, selectedDate: '2020-11-16' };
  }

  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    return (
      <div>
        {/* <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <p>Your ID is: {this.props.store.user.id}</p> */}
        {/* <LogOutButton className="log-in" /> */}
        <div>

        <DropdownDate
          startDate={                       // optional, if not provided 1900-01-01 is startDate
            '2020-01-01'                    // 'yyyy-mm-dd' format only
          }
          endDate={                         // optional, if not provided current date is endDate
            '2025-12-31'                    // 'yyyy-mm-dd' format only
          }
          selectedDate={                    // optional
            this.state.selectedDate         // 'yyyy-mm-dd' format only
          }
          order={[                          // optional
            DropdownComponent.year,         // Order of the dropdowns
            DropdownComponent.day,
            DropdownComponent.month
          ]}
          onMonthChange={(month) => {       // optional
            console.log(month);
          }}
          onDayChange={(day) => {           // optional
            console.log(day);
          }}
          onYearChange={(year) => {         // optional
            console.log(year);
          }}
          onDateChange={(date) => {         // optional
            console.log(date);
            this.setState({ date: date, selectedDate: formatDate(date) });
          }}
          ids={                             // optional
            {
              year: 'select-year',
              month: 'select-month',
              day: 'select-day'
            }
          }
          names={                           // optional
            {
              year: 'year',
              month: 'month',
              day: 'day'
            }
          }
          classes={                         // optional
            {
              dateContainer: 'classes',
              yearContainer: 'classes',
              monthContainer: 'classes',
              dayContainer: 'classes',
              year: 'classes classes',
              month: 'classes classes',
              day: 'classes classes',
              yearOptions: 'classes',
              monthOptions: 'classes',
              dayOptions: 'classes'
            }
          }
          defaultValues={                   // optional
            {
              year: 'select year',
              month: 'select month',
              day: 'select day'
            }
          }
          options={                         // optional
            {
              yearReverse: true,            // false by default
              monthShort: true,             // false by default
              monthCaps: true               // false by default
            }
          }
        />
      </div>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(Date);




