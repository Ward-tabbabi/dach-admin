import React from "react";

const QuizList = () => {
  return (
    <div className="quizdash">
      <h1>QUIZ DASHBOARD</h1>
      <div className="quizlist">
        <h1>list of all the quizzs in this week</h1>
        <ul>
          <li>quiz n:1</li>
          <li>quiz n:2</li>
          <li>quiz n:3</li>
          <li>quiz n:4</li>
          <li>quiz n:5</li>
          <li>quiz n:6</li>
          <li>quiz n:7</li>
          <li>quiz n:8</li>
          <li>quiz n:9</li>
          <li>quiz n:10</li>
        </ul>
        <div className="graphcontainer">
          <div class="frame">
            <h1> Weekly list of quizzs</h1>
            <div class="card">
              <div class="header">
                <span class="title big">quizzs/days</span>
                <span class="date small">01. Feb - 07. Feb</span>
                <span class="type small">quizzs-graph</span>
                <span class="value">all-quizzs</span>
              </div>
              <div class="clearfix"></div>
              <div class="parameter">
                <span class="red">Views</span>
                <span class="blue">quiz</span>
              </div>
              <div class="statistic">
                <div class="line-1"></div>
                <div class="line-2"></div>
                <div class="line-3"></div>
                <div class="data red">
                  <svg>
                    <polyline points="9,46 50,12 90,23 130,11 171,38 211,48 251,19"></polyline>
                  </svg>
                  <div class="points">
                    <div class="point-1">
                      <div class="tooltip">458</div>
                    </div>
                    <div class="point-2">
                      <div class="tooltip">812</div>
                    </div>
                    <div class="point-3">
                      <div class="tooltip">746</div>
                    </div>
                    <div class="point-4">
                      <div class="tooltip">877</div>
                    </div>
                    <div class="point-5">
                      <div class="tooltip">517</div>
                    </div>
                    <div class="point-6">
                      <div class="tooltip">434</div>
                    </div>
                    <div class="point-7">
                      <div class="tooltip">458</div>
                    </div>
                  </div>
                </div>
                <div class="data blue">
                  <svg>
                    <polyline points="9,61 50,50 90,65 130,55 171,61 211,74 251,64"></polyline>
                  </svg>
                  <div class="points">
                    <div class="point-1">
                      <div class="tooltip">26</div>
                    </div>
                    <div class="point-2">
                      <div class="tooltip">41</div>
                    </div>
                    <div class="point-3">
                      <div class="tooltip">22</div>
                    </div>
                    <div class="point-4">
                      <div class="tooltip">36</div>
                    </div>
                    <div class="point-5">
                      <div class="tooltip">25</div>
                    </div>
                    <div class="point-6">
                      <div class="tooltip">13</div>
                    </div>
                    <div class="point-7">
                      <div class="tooltip">20</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="days">
                <span class="day">Mon</span>
                <span class="day">Tue</span>
                <span class="day">Wed</span>
                <span class="day">Thu</span>
                <span class="day">Fri</span>
                <span class="day">Sat</span>
                <span class="day">Sun</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizList;
