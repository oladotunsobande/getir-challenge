const payloadWithStartDateGreaterThanEndDate = {
  startDate: '2020-12-01',
  endDate: '2015-01-01',
  minCount: 0,
  maxCount: 100,
};

const payloadWithSameStartDateAndEndDate = {
  startDate: '2015-01-01',
  endDate: '2015-01-01',
  minCount: 0,
  maxCount: 100,
};

const payloadWithWrongStartDateFormat = {
  startDate: '01-01-2015',
  endDate: '2020-12-01',
  minCount: 0,
  maxCount: 100,
};

const payloadWithInvalidStartDate = {
  startDate: '1 January 2015',
  endDate: '2020-12-01',
  minCount: 0,
  maxCount: 100,
};

const payloadWithEmptyStartDate = {
  startDate: '',
  endDate: '2020-12-01',
  minCount: 0,
  maxCount: 100,
};

const payloadWithWrongEndDateFormat = {
  startDate: '2015-01-01',
  endDate: '01-12-2020',
  minCount: 0,
  maxCount: 100,
};

const payloadWithDatesInNumberFormat = {
  startDate: 20150101,
  endDate: 1122020,
  minCount: 0,
  maxCount: 100,
};

const payloadWithInvalidEndDate = {
  startDate: '2015-01-01',
  endDate: '1 December 2020',
  minCount: 0,
  maxCount: 100,
};

const payloadWithEmptyEndDate = {
  startDate: '2015-01-01',
  endDate: '',
  minCount: 0,
  maxCount: 100,
};

const missingStartDatePayload = {
  endDate: '2020-12-01',
  minCount: 0,
  maxCount: 100,
};

const missingEndDatePayload = {
  startDate: '2015-01-01',
  minCount: 0,
  maxCount: 100,
};

const missingMaxCountPayload = {
  startDate: '2015-01-01',
  endDate: '2020-12-01',
  minCount: 0,
};

const missingMinCountPayload = {
  startDate: '2015-01-01',
  endDate: '2020-12-01',
  maxCount: 100,
};

const payloadWithMinCountGreaterThanMaxCount = {
  startDate: '2015-01-01',
  endDate: '2020-12-01',
  minCount: 100,
  maxCount: 0,
};

const payloadWithSameMinCountAndMaxCount = {
  startDate: '2015-01-01',
  endDate: '2020-12-01',
  minCount: 100,
  maxCount: 100,
};

const payloadWithMinCountsInString = {
  startDate: '2015-01-01',
  endDate: '2020-12-01',
  minCount: '0',
  maxCount: 100,
};

const payloadWithMaxCountsInString = {
  startDate: '2015-01-01',
  endDate: '2020-12-01',
  minCount: 0,
  maxCount: '100',
};

const payloadWithInvalidField = {
  startDate: '2015-01-01',
  endDate: '2020-12-01',
  minCount: 0,
  maxCount: 100,
  check: true,
};

const validPayload = {
  startDate: '2015-01-01',
  endDate: '2020-12-01',
  minCount: 0,
  maxCount: 100,
};