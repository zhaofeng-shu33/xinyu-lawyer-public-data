import { TableConfig, getCellByName } from './table';
const lawyerOfficeTimeTable: TableConfig = {
  guid: 'qZx7ltnDo0I9BSLD',
  indexKey: 'lawyer-office-time',
  sheets: ['志愿法律服务单位服务时长排序表'],
  skipRows: 1,
  skipColumns: 0,
  nameRow: 1,
  typeRow: -1,
  defaultValueRow: -1,
  maxColumn: 'F',
  getFilePath: () => 'lawyer-office-time/data.json',
  feParser: async (data: any[]) => {
    return data.map((row, id) => {
      return {
        id,
        name: getCellByName(row, '所在单位').value,
        time: getCellByName(row, '单位服务时长').value,
        number: getCellByName(row, '单位服务人数').value,
        average_time: getCellByName(row, '人均服务时长').value,
        total_number: getCellByName(row, '单位总人数').value,
        ratio: getCellByName(row, '单位提供服务人数比').value,
    };
    });
  },
  validation: () => true
};

export default lawyerOfficeTimeTable;
