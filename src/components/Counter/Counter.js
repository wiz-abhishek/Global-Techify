import React from 'react';
import styles from './counter.module.css';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Counter = () => {
  return (
    <div
      className={`${styles.ftco_counter} ${styles.ftco_bg_dark} ${styles.img}`}
      id={`${styles.section_counter}`}
>
        <div class={`${styles.container_gc}`} style={{ margin: 'auto' }}>
          <div class={`${styles.row_gc}`}>
            <div class={`${styles.col_md_12}`}>
              <div class={`${styles.row_gc}`}>
                <div
                  class={`${styles.col_md_6} ${styles.col_lg_3} ${styles.counter_wrap} `}
                >
                  <div class={`${styles.block_18}`}>
                    <div class={`${styles.circle}`}>
                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <div style={{ height: '50px' }}>
                            {isVisible ? (
                              <CountUp
                                end={2000000}
                                duration={2.5}
                                separator={','}
                                className={`${styles.numbergc}`}
                              />
                            ) : null}+
                          </div>
                        )}
                      </VisibilitySensor>
                      <span style={{ fontSize: '22px', textSpacing: '1px' }}>
                      Users
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  class={`${styles.col_md_6} ${styles.col_lg_3} ${styles.counter_wrap} `}
                >
                  <div class={`${styles.block_18}`}>
                    <div class={`${styles.circle}`}>
                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <div style={{ height: '50px' }}>
                            {isVisible ? (
                              <CountUp
                                end={10000}
                                duration={2.5}
                                className={`${styles.numbergc}`}
                              />
                            ) : null}+
                          </div>
                        )}
                      </VisibilitySensor>
                      <span style={{ fontSize: '22px', textSpacing: '1px' }}>
                      Mentors
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  class={`${styles.col_md_6} ${styles.col_lg_3} ${styles.counter_wrap} `}
                >
                  <div class={`${styles.block_18}`}>
                    <div class={`${styles.circle}`}>
                      <VisibilitySensor partialVisibility>
                        {({ isVisible }) => (
                          <div style={{ height: '50px' }}>
                            {isVisible ? (
                              <CountUp
                                end={1500}
                                duration={2.5}
                                className={`${styles.numbergc}`}
                              />
                            ) : null}+
                          </div>
                        )}
                      </VisibilitySensor>
                      <span style={{ fontSize: '22px', textSpacing: '1px' }}>
                     Companies
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  class={`${styles.col_md_6} ${styles.col_lg_3} ${styles.counter_wrap} `}
                >
                  <div class={`${styles.block_18}`}>
                    <div class={`${styles.circle}`}>
                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <div style={{ height: '50px' }}>
                            {isVisible ? (
                              <CountUp
                                end={1900}
                                duration={2.5}
                                separator={','}
                                className={`${styles.numbergc}`}
                              />
                            ) : null}+
                          </div>
                        )}
                      </VisibilitySensor>
                      <span style={{ fontSize: '22px', textSpacing: '1px' }}>
                        Colleges
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  class={`${styles.col_md_6} ${styles.col_lg_3} ${styles.counter_wrap} `}
                >
                  <div class={`${styles.block_18}`}>
                    <div class={`${styles.circle}`}>
                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <div style={{ height: '50px' }}>
                            {isVisible ? (
                              <CountUp
                                end={15000}
                                duration={2.5}
                                separator={','}
                                className={`${styles.numbergc}`}
                              />
                            ) : null}+
                          </div>
                        )}
                      </VisibilitySensor>
                      <span style={{ fontSize: '22px', textSpacing: '1px' }}>
                        Opportunities
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Counter;
