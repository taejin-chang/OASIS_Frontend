import TreeView from "@mui/lab/TreeView";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Label from "@mui/icons-material/Label";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import * as React from "react";
import {styled} from "@mui/material/styles";
import TreeItem, {treeItemClasses} from "@mui/lab/TreeItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
    color: theme.palette.text.secondary,
    [`& .${treeItemClasses.content}`]: {
        color: theme.palette.text.secondary,
        borderTopRightRadius: theme.spacing(2),
        borderBottomRightRadius: theme.spacing(2),
        paddingRight: theme.spacing(1),
        fontWeight: theme.typography.fontWeightMedium,
        '&.Mui-expanded': {
            fontWeight: theme.typography.fontWeightRegular,
        },
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
        },
        '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
            backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
            color: 'var(--tree-view-color)',
        },
        [`& .${treeItemClasses.label}`]: {
            fontWeight: 'inherit',
            color: 'inherit',
        },
    },
    [`& .${treeItemClasses.group}`]: {
        marginLeft: 0,
        [`& .${treeItemClasses.content}`]: {
            paddingLeft: theme.spacing(4),
        },
    },
}));

function StyledTreeItem(props) {
    const {
        bgColor,
        color,
        labelIcon: LabelIcon,
        labelInfo,
        labelText,
        ...other
    } = props;

    return (
        <StyledTreeItemRoot
            label={
                <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
                    <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
                    <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
                        {labelText}
                    </Typography>
                    <Typography variant="caption" color="inherit">
                        {labelInfo}
                    </Typography>
                </Box>
            }
            style={{
                '--tree-view-color': color,
                '--tree-view-bg-color': bgColor,
            }}
            {...other}
        />

    );
}

StyledTreeItem.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    labelIcon: PropTypes.elementType.isRequired,
    labelInfo: PropTypes.string,
    labelText: PropTypes.string.isRequired,
};

const UserTreeView = () => {

    return (

        <TreeView
            aria-label="gmail"
            defaultExpanded={['8']}
            defaultCollapseIcon={<ArrowDropDownIcon/>}
            defaultExpandIcon={<ArrowRightIcon/>}
            defaultEndIcon={<div style={{width: 24}}/>}
            sx={{height: 500, flexGrow: 1, maxWidth: 500, overflowY: 'auto'}}
        >
            <StyledTreeItem nodeId="1" labelText="보안기술연구소" labelIcon={Label}>
                <StyledTreeItem
                    nodeId="2"
                    labelText="아이사인개발부"
                    labelIcon={Label}
                    labelInfo="15"
                    color="#1a73e8"
                    bgColor="#e8f0fe"
                >
                    <StyledTreeItem
                        nodeId="4"
                        labelText="1팀"
                        labelIcon={SupervisorAccountIcon}
                        labelInfo="5"
                        color="#1a73e8"
                        // bgColor="#e8f0fe"
                    >
                        <StyledTreeItem
                            nodeId="6"
                            labelText="정철하"
                            // labelIcon={SupervisorAccountIcon}
                            // labelInfo="5"
                            color="#1a73e8"
                            bgColor="#e8f0fe"
                        />
                        <StyledTreeItem
                            nodeId="7"
                            labelText="김명진"
                            // labelIcon={SupervisorAccountIcon}
                            // labelInfo="5"
                            color="#1a73e8"
                            bgColor="#e8f0fe"
                        />
                        <StyledTreeItem
                            nodeId="8"
                            labelText="최예소라"
                            // labelIcon={SupervisorAccountIcon}
                            // labelInfo="5"
                            color="#1a73e8"
                            bgColor="#e8f0fe"
                        />
                        <StyledTreeItem
                            nodeId="9"
                            labelText="김성진"
                            // labelIcon={SupervisorAccountIcon}
                            // labelInfo="5"
                            color="#1a73e8"
                            bgColor="#e8f0fe"
                        />
                    </StyledTreeItem>
                    <StyledTreeItem
                        nodeId="5"
                        labelText="2팀"
                        labelIcon={SupervisorAccountIcon}
                        labelInfo="5"
                        color="#1a73e8"
                        bgColor="#e8f0fe"
                    >
                        <StyledTreeItem
                            nodeId="10"
                            labelText="강병주"
                            // labelIcon={SupervisorAccountIcon}
                            // labelInfo="5"
                            color="#1a73e8"
                            bgColor="#e8f0fe"
                        />
                        <StyledTreeItem
                            nodeId="11"
                            labelText="이재연"
                            // labelIcon={SupervisorAccountIcon}
                            // labelInfo="5"
                            color="#1a73e8"
                            bgColor="#e8f0fe"
                        />
                        <StyledTreeItem
                            nodeId="12"
                            labelText="조대준"
                            // labelIcon={SupervisorAccountIcon}
                            // labelInfo="5"
                            color="#1a73e8"
                            bgColor="#e8f0fe"
                        />
                        <StyledTreeItem
                            nodeId="13"
                            labelText="김현교"
                            // labelIcon={SupervisorAccountIcon}
                            // labelInfo="5"
                            color="#1a73e8"
                            bgColor="#e8f0fe"
                        />
                    </StyledTreeItem>
                </StyledTreeItem>
                <StyledTreeItem
                    nodeId="3"
                    labelText="디아모개발부"
                    labelIcon={SupervisorAccountIcon}
                    labelInfo="4"
                    color="#e3742f"
                    bgColor="#fcefe3"
                />
            </StyledTreeItem>
        </TreeView>

    );
};

export default UserTreeView;
