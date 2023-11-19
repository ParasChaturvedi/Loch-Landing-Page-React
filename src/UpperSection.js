import React from 'react'

function UpperSection() {
  return (
    <>
        <div className="upper-section">
        <div className="notify">
            <div className="notification">
              <i className="fa-regular fa-bell"></i>
              <h2 className="notification-heading">
                Get notified when a highly correlated whale makes a move
              </h2>
              <p className="notification-para">
                Find out when a certain whale moves more than any preset amount
                on-chain or when a dormant whale you care about becomes active.
              </p>
            </div>
            </div>
            <div className="notification-cards">
              <div className="card">
                <div className="bell-saveBtn">
                  <i className="fa-regular fa-bell icon"></i>
                  <span>Save</span>
                </div>
                <div className="content">
                  <h3>We’ll be sending notifications to you here</h3>
                </div>
                <div className="card-input">
                  <input type="name" id="name" placeholder="Paras" />
                </div>
              </div>

              <div className="card">
                <div className="bell-saveBtn">
                  <i className="fa-solid fa-chart-simple icon"></i>
                  <i className="fa-solid fa-check"></i>
                </div>
                <div className="content">
                  <h2>Notify me when any wallets move more than</h2>
                </div>
                <div className="selector">
                  <select name="price" id="price">
                    <option value="$1000">$1000</option>
                    <option value="$2000">$2000</option><option value="None">None</option>
                  </select>
                </div>
              </div>
              <div className="card">
                <div className="bell-saveBtn">
                <i class="fa-regular fa-clock icon"></i>
                  <i className="fa-solid fa-check"></i>
                </div>
                <div className="content-title">
                  <h2>Notify me when any wallet dormant for</h2>
                </div>
                <div className="selector">
                  <select name="price" id="price">
                    <option value=">30"> 	&#62; 30 Days</option>
                    <option value=">15">&#62; 15 Days</option><option value="None">None</option>
                  </select>
                </div>
                <div className="cardFooter-title">
                  <h2>becomes active</h2>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default UpperSection