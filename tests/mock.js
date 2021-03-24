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

const payloadWithEmptyStartDate = {
  startDate: '',
  endDate: '2020-12-01',
  minCount: 0,
  maxCount: 100,
};

const payloadWithDatesInNumberFormat = {
  startDate: 20150101,
  endDate: 1122020,
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

const validPayload = {
  startDate: '2015-01-01',
  endDate: '2017-12-01',
  minCount: 2700,
  maxCount: 2800,
};

module.exports = {
  payloadWithStartDateGreaterThanEndDate,
  payloadWithSameStartDateAndEndDate,
  payloadWithDatesInNumberFormat,
  payloadWithEmptyEndDate,
  payloadWithEmptyStartDate,
  payloadWithMinCountGreaterThanMaxCount,
  payloadWithSameMinCountAndMaxCount,
  validPayload,
  missingStartDatePayload,
  missingMinCountPayload,
  missingMaxCountPayload,
  missingEndDatePayload,
};