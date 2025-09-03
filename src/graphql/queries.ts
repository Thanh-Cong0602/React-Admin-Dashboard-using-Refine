import gql from 'graphql-tag';

export const DASHBOARD_TOTAL_COUNTS_QUERY = gql`
  query DashboardTotalCounts {
    companies {
      totalCount
    }
    contacts {
      totalCount
    }
    deals {
      totalCount
    }
  }
`;

export const USERS_SELECT_QUERY = gql`
  query UsersSelect($filter: UserFilter!, $sorting: [UserSort!], $paging: OffsetPaging!) {
    users(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        name
        avatarUrl
      }
    }
  }
`;

export const TASK_STAGES_SELECT_QUERY = gql`
  query TaskStagesSelect($filter: TaskStageFilter!, $sorting: [TaskStageSort!], $paging: OffsetPaging!) {
    taskStages(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        title
      }
    }
  }
`;

/* Query to get upcoming events */
export const DASHBOARD_CALENDAR_UPCOMING_EVENTS_QUERY = gql`
  query DashboardCalendarUpcomingEvents(
    $filter: EventFilter!
    $sorting: [EventSort!]
    $paging: OffsetPaging!
  ) {
    events(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        title
        color
        startDate
        endDate
      }
    }
  }
`;

export const DASHBOARD_DEALS_CHART_QUERY = gql`
  query DashboardDealsChart($filter: DealStageFilter!, $sorting: [DealStageSort!], $paging: OffsetPaging) {
    dealStages(filter: $filter, sorting: $sorting, paging: $paging) {
      nodes {
        id
        title
        dealsAggregate {
          groupBy {
            closeDateMonth
            closeDateYear
          }
          sum {
            value
          }
        }
      }
      totalCount
    }
  }
`;

export const DASHBOARD_LATEST_ACTIVITIES_AUDITS_QUERY = gql`
  query DashboardLatestActivitiesAudits(
    $filter: AuditFilter!
    $sorting: [AuditSort!]
    $paging: OffsetPaging
  ) {
    audits(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        action
        targetEntity
        targetId
        changes {
          field
          from
          to
        }
        createdAt
        user {
          id
          name
          avatarUrl
        }
      }
    }
  }
`;

export const DASHBOARD_LATEST_ACTIVITIES_DEALS_QUERY = gql`
  query DashboardLatestActivitiesDeals($filter: DealFilter!, $sorting: [DealSort!], $paging: OffsetPaging) {
    deals(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        title
        stage {
          id
          title
        }
        company {
          id
          name
          avatarUrl
        }
        createdAt
      }
    }
  }
`;

export const COMPANIES_LIST_QUERY = gql`
  query CompaniesList($filter: CompanyFilter!, $sorting: [CompanySort!], $paging: OffsetPaging!) {
    companies(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        name
        avatarUrl
        dealsAggregate {
          sum {
            value
          }
        }
      }
    }
  }
`;

export const CREATE_COMPANY_MUTATION = gql`
  mutation CreateCompany($input: CreateOneCompanyInput!) {
    createOneCompany(input: $input) {
      id
      salesOwner {
        id
      }
    }
  }
`;

export const UPDATE_COMPANY_MUTATION = gql`
  mutation UpdateCompany($input: UpdateOneCompanyInput!) {
    updateOneCompany(input: $input) {
      id
      name
      totalRevenue
      industry
      companySize
      businessType
      country
      website
      avatarUrl
      salesOwner {
        id
        name
        avatarUrl
      }
    }
  }
`;

export const COMPANY_CONTACTS_TABLE_QUERY = gql`
  query CompanyContactsTable($filter: ContactFilter!, $sorting: [ContactSort!], $paging: OffsetPaging!) {
    contacts(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        name
        avatarUrl
        jobTitle
        email
        phone
        status
      }
    }
  }
`;

export const TASK_STAGES_QUERY = gql`
  query TaskStages($filter: TaskStageFilter!, $sorting: [TaskStageSort!], $paging: OffsetPaging!) {
    taskStages(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        title
      }
    }
  }
`;

export const TASKS_QUERY = gql`
  query Tasks($filter: TaskFilter!, $sorting: [TaskSort!], $paging: OffsetPaging!) {
    tasks(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        title
        description
        dueDate
        completed
        stageId
        users {
          id
          name
          avatarUrl
        }
        createdAt
        updatedAt
      }
    }
  }
`;

export const UPDATE_TASK_STAGE_MUTATION = gql`
  mutation UpdateTaskStage($input: UpdateOneTaskInput!) {
    updateOneTask(input: $input) {
      id
    }
  }
`;