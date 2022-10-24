import WorkLogItem from "./WorkLogItem";

const WorkLogList = ({
  workLogList,
  handleClickModification,
  handleClickRemoval,
  handleChangeWorkLog,
}) => {
  return (
    <div>
      {workLogList &&
        workLogList.map((workLog, index) => (
          <WorkLogItem
            key={index}
            date={workLog.date}
            contents={workLog.contents}
            isModify={workLog.isModify}
            handleClickModification={handleClickModification}
            handleClickRemoval={handleClickRemoval}
            handleChangeWorkLog={handleChangeWorkLog}
          />
        ))}
    </div>
  );
};

export default WorkLogList;
