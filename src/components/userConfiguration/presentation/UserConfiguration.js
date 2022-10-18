import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import Typography from '@mui/material/Typography';
import MailIcon from '@mui/icons-material/Mail';
import DeleteIcon from '@mui/icons-material/Delete';
import Label from '@mui/icons-material/Label';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import InfoIcon from '@mui/icons-material/Info';
import ForumIcon from '@mui/icons-material/Forum';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

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

export default function GmailTreeView() {
    return (
        <TreeView
            aria-label="gmail"
            defaultExpanded={['8']}
            defaultCollapseIcon={<ArrowDropDownIcon />}
            defaultExpandIcon={<ArrowRightIcon />}
            defaultEndIcon={<div style={{ width: 24 }} />}
            sx={{ height: 700, flexGrow: 1, maxWidth: 250, overflowY: 'auto' }}
        >
            <StyledTreeItem nodeId="1" labelText="보안기술연구소" labelIcon={Label}>
                <StyledTreeItem
                    nodeId="2"
                    labelText="아이사인개발부"
                    labelIcon={Label}
                    labelInfo="5"
                    color="#1a73e8"
                    bgColor="#e8f0fe"
                >
                    <StyledTreeItem
                        nodeId="3"
                        labelText="1팀"
                        labelIcon={SupervisorAccountIcon}
                        labelInfo="5"
                        color="#1a73e8"
                        // bgColor="#e8f0fe"
                    >
                        <StyledTreeItem
                            nodeId="4"
                            labelText="정철하"
                            // labelIcon={SupervisorAccountIcon}
                            // labelInfo="5"
                            color="#1a73e8"
                            bgColor="#e8f0fe"
                        />
                        <StyledTreeItem
                            nodeId="5"
                            labelText="김명진"
                            // labelIcon={SupervisorAccountIcon}
                            // labelInfo="5"
                            color="#1a73e8"
                            bgColor="#e8f0fe"
                        />
                        <StyledTreeItem
                            nodeId="6"
                            labelText="최예소라"
                            // labelIcon={SupervisorAccountIcon}
                            // labelInfo="5"
                            color="#1a73e8"
                            bgColor="#e8f0fe"
                        />
                        <StyledTreeItem
                            nodeId="7"
                            labelText="김성진"
                            // labelIcon={SupervisorAccountIcon}
                            // labelInfo="5"
                            color="#1a73e8"
                            bgColor="#e8f0fe"
                        />
                    </StyledTreeItem>
                    <StyledTreeItem
                        nodeId="3"
                        labelText="2팀"
                        labelIcon={SupervisorAccountIcon}
                        labelInfo="5"
                        color="#1a73e8"
                        bgColor="#e8f0fe"
                    >
                        <StyledTreeItem
                            nodeId="4"
                            labelText="강병주"
                            // labelIcon={SupervisorAccountIcon}
                            // labelInfo="5"
                            color="#1a73e8"
                            bgColor="#e8f0fe"
                        />
                        <StyledTreeItem
                            nodeId="5"
                            labelText="이재연"
                            // labelIcon={SupervisorAccountIcon}
                            // labelInfo="5"
                            color="#1a73e8"
                            bgColor="#e8f0fe"
                        />
                        <StyledTreeItem
                            nodeId="6"
                            labelText="조대준"
                            // labelIcon={SupervisorAccountIcon}
                            // labelInfo="5"
                            color="#1a73e8"
                            bgColor="#e8f0fe"
                        />
                        <StyledTreeItem
                            nodeId="7"
                            labelText="김현교"
                            // labelIcon={SupervisorAccountIcon}
                            // labelInfo="5"
                            color="#1a73e8"
                            bgColor="#e8f0fe"
                        />
                    </StyledTreeItem>
                </StyledTreeItem>
                <StyledTreeItem
                    nodeId="4"
                    labelText="디아모개발부"
                    labelIcon={SupervisorAccountIcon}
                    labelInfo="4"
                    color="#e3742f"
                    bgColor="#fcefe3"
                />
                {/*<StyledTreeItem*/}
                {/*    nodeId="5"*/}
                {/*    labelText="3팀"*/}
                {/*    labelIcon={SupervisorAccountIcon}*/}
                {/*    labelInfo="3"*/}
                {/*    color="#a250f5"*/}
                {/*    bgColor="#f3e8fd"*/}
                {/*/>*/}
                {/*<StyledTreeItem*/}
                {/*    nodeId="6"*/}
                {/*    labelText="4팀"*/}
                {/*    labelIcon={SupervisorAccountIcon}*/}
                {/*    labelInfo="1"*/}
                {/*    color="#3c8039"*/}
                {/*    bgColor="#e6f4ea"*/}
                {/*/>*/}
            </StyledTreeItem>
            {/*<StyledTreeItem nodeId="2" labelText="미등ㄹ" labelIcon={Label} />*/}
        </TreeView>
    );
}
