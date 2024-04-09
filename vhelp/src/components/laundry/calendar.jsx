import React from 'react';
import "../styles/calendar.css";
const calendar = () => {
  return (
    <div>
      <div className="schedule-text">
        <h1>April 2024</h1>
        <p>Laundry Schedule for the Month of April 2024</p>
      </div>
      <ul>
        <li><time dateTime="2024-04-01">1</time>101-201</li>
        <li><time dateTime="2024-04-02">2</time>201-301</li>
        <li><time dateTime="2024-04-03">3</time>301-401</li>
        <li><time dateTime="2024-04-04">4</time>401-501</li>
        <li><time dateTime="2024-04-05">5</time>501-601</li>
        <li><time dateTime="2024-04-06">6</time>601-701</li>
        <li><time dateTime="2024-04-07">7</time>701-801</li>
        <li><time dateTime="2024-04-08">8</time>801-901</li>
        <li className="today"><time dateTime="2024-04-09">9</time>901-1001</li>
        <li><time dateTime="2024-04-10">10</time>1001-1101</li>
        <li><time dateTime="2024-04-11">11</time>1101-1201</li>
        <li><time dateTime="2024-04-12">12</time>1201-1301</li>
        <li><time dateTime="2024-04-13">13</time>1301-1401</li>
        <li><time dateTime="2024-04-14">14</time>1401-1501</li>
        <li><time dateTime="2024-04-15">15</time>1501-1601</li>
        <li><time dateTime="2024-04-16">16</time>1601-1701</li>
        <li><time dateTime="2024-04-17">17</time>1701-1743</li>
        <li><time dateTime="2024-04-18">18</time>101-201</li>
        <li ><time dateTime="2024-02-19">19</time>201-301</li>
        <li><time dateTime="2024-04-20">20</time>301-401</li>
        <li><time dateTime="2024-04-21">21</time>401-501</li>
        <li><time dateTime="2024-04-22">22</time>501-601</li>
        <li><time dateTime="2024-04-23">23</time>601-701</li>
        <li><time dateTime="2024-04-24">24</time>701-801</li>
        <li><time dateTime="2024-04-25">25</time>801-901</li>
        <li><time dateTime="2024-04-26">26</time>901-1001</li>
        <li><time dateTime="2024-04-27">27</time>1001-1101</li>
        <li><time dateTime="2024-04-28">28</time>1101-1201</li>
        <li><time dateTime="2024-04-29">29</time>1201-1301</li>
        <li><time dateTime="2024-04-30">30</time>1301-1401</li>
      </ul>
    </div>
  );
}

export default calendar;
