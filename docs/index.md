# AWS Solutions Architect Assocciate/Professional Exam notes

---

# Important to know for Professional exam

**AWS Well-Architected framework**
[AWS Well-Architected framework](https://aws.amazon.com/architecture/well-architected/?wa-lens-whitepapers.sort-by=item.additionalFields.sortDate&wa-lens-whitepapers.sort-order=desc&wa-guidance-whitepapers.sort-by=item.additionalFields.sortDate&wa-guidance-whitepapers.sort-order=desc)

- **Features vs. Services:** Only main services are included. Features or sub-services (e.g., "Blocking an IP Address") are excluded to maintain clarity.
- **Concepts Included:** Concepts like "Big Data Architecture" and "Cloud Migration Strategies - The 7Rs" as they are integral to understanding AWS services and their applications.

## Глубина

Exam type: A=associate. P=professional.

1-3 - уровень, где 1 - знать что это, 2 - понимать как использовать  3 - надо знать очень хорошо

---

## 1. Compute Services

| **Название сервиса**                       | **Глубина** | **Кратко о применении**                         | **Подробности**                                                                                                                                                                                      |
|--------------------------------------------|:-----------:|-------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Amazon EC2**                             | **A3 / P3** | Виртуальные серверы любого размера              | Типы инстансов, Launch Templates, EC2 Auto Scaling, Spot & Savings Plans, Nitro, ENI. [Cheat Sheet](https://tutorialsdojo.com/amazon-elastic-compute-cloud-amazon-ec2/)                              |
| **Elastic Load Balancing** (ALB/NLB/GWLB)   | **A3 / P3** | Балансировка L7 / L4 / appliance-LB             | Host/Path rules, TLS termination, Health Checks, Cross-Zone LB, GWLB для виртуальных фаерволов. [Cheat Sheet](https://tutorialsdojo.com/aws-elastic-load-balancing-elb/)                             |
| **Placement Groups**                       | **A1 / P2** | EC2 распределение по AZ/узлам                   | Cluster/Spread/Partition; сценарии низкой задержки vs fault-isolation, лимиты. [Cheat Sheet](https://tutorialsdojo.com/aws-ec2-placement-groups/)                                                     |
| **AWS Lambda**                             | **A2 / P3** | Serverless функции по событиям                  | Triggers (API GW, S3, SNS), версии/алиасы, Reserved/Provisioned Concurrency, Layers, DLQ, VPC интеграция. [Cheat Sheet](https://tutorialsdojo.com/aws-lambda/)                                      |
| **Amazon ECS**                             | **A2 / P2** | Управляемая Docker-оркестрация                  | EC2 vs Fargate Launch, Task Definitions, Service Auto Scaling, IAM Roles for Tasks. [Cheat Sheet](https://tutorialsdojo.com/amazon-elastic-container-service-amazon-ecs/)                             |
| **Amazon EKS**                             | **A1 / P2** | Управляемый Kubernetes                          | Managed Node Groups, IRSA, Control-plane SLA, CNI Networking, Add-ons. [Cheat Sheet](https://tutorialsdojo.com/amazon-elastic-kubernetes-service-eks/)                                             |
| **AWS App Runner**                         | **A1 / P1** | Source-to-URL развертывание контейнеров          | GitHub/ECR авто-деплой, Auto Scaling по RPS, HTTPS по умолчанию, IAM SLR. [Cheat Sheet](https://tutorialsdojo.com/aws-app-runner/)                                                                   |
| **AWS Fargate**                            | **A2 / P2** | Serverless запуск контейнеров                   | CPU/Memory per task, Fargate Spot, FireLens логирование, EFS volumes. [Cheat Sheet](https://tutorialsdojo.com/aws-fargate/)                                                                         |
| **AWS Batch**                              | **A1 / P1** | Пакетные / HPC-джобы                            | Managed CE (EC2/Fargate), Job Queues & Definitions, Array Jobs, Spot-pricing. [Cheat Sheet](https://tutorialsdojo.com/aws-batch/)                                                                   |
| **AWS Outposts**                           | **A1 / P2** | AWS-оборудование on-prem                        | EC2/EBS/RDS/EKS on Outposts, локальный S3, связь с Region, форм-факторы Rack/Server. [Cheat Sheet](https://tutorialsdojo.com/aws-outposts/)                                                       |
| **AWS Wavelength**                         | **A1 / P1** | 5G edge-вычисления                              | Одно-значная мс-латентность, поддержка EC2/EKS, traffic local-breakout. [Cheat Sheet](https://tutorialsdojo.com/aws-wavelength/)                                                                   |
| **AWS Local Zones**                        | **A1 / P1** | Edge-зоны в крупных городах                     | Локальный EC2/EBS/ALB, отдельный sub-region, low-latency к клиентам. [Cheat Sheet](https://tutorialsdojo.com/aws-local-zones/)                                                                     |

## 2. Storage Services

| **Название сервиса**                                 | **Глубина** | **Кратко о применении**                             | **Подробности**                                                                                                                                                                                                                       |
|------------------------------------------------------|:-----------:|-----------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Amazon S3**                                        | **A3 / P3** | Объектное хранилище «неограниченной» ёмкости        | Storage Classes, Versioning, MFA-Delete, Lifecycle Policies, Encryption (SSE-S3/KMS/Client), Replication, Object Lock, Access Points, OAI/OAC, Transfer Acceleration. [Cheat Sheet](https://tutorialsdojo.com/amazon-s3/)          |
| **Amazon EBS**                                       | **A3 / P3** | Блочные тома для EC2                                | gp2/gp3, io1/io2, st1/sc1, Multi-Attach, Fast Snapshot Restore, Elastic Volumes, шифрование, Backups & Snapshots, Performance IOPS/Throughput квоты. [Cheat Sheet](https://tutorialsdojo.com/amazon-ebs/)                         |
| **Amazon EFS**                                       | **A2 / P2** | Распределённое NFS-хранилище                        | General-Purpose & Max-IO, Lifecycle Management (EFS-IA), Throughput modes, Access Points & Posix ACL, Mount Targets/Security Groups, Backup. [Cheat Sheet](https://tutorialsdojo.com/amazon-efs/)                                     |
| **Amazon FSx** (Windows, Lustre, ONTAP, OpenZFS)      | **A1 / P2** | Управляемые третье-сторонние файловые системы       | SMB + AD integration, Lustre HPC, ONTAP SnapMirror/FlexClone, OpenZFS snapshots; SSD/HDD throughput, multi-AZ (Windows), data tiering. [Cheat Sheet](https://tutorialsdojo.com/amazon-fsx/)                                        |
| **Amazon S3 Glacier / Deep Archive**                 | **A2 / P2** | Архивное хранение с низкой стоимостью               | Vaults & Archives, Retrieval Tiers (Expedited/Standard/Bulk), Vault Lock (WORM), Min storage 90/180 дней, Lifecycle Transition из S3. [Cheat Sheet](https://tutorialsdojo.com/amazon-s3-glacier/)                              |
| **AWS Storage Gateway**                              | **A2 / P2** | Гибридные File/Volume/Tape шлюзы                    | Cached vs Stored Volumes, File Gateway (NFS/SMB), Tape Gateway (VTL), локальный кэш, офф-лайн восстановление, интеграция с AWS Backup. [Cheat Sheet](https://tutorialsdojo.com/aws-storage-gateway/)                           |
| **AWS Backup**                                       | **A2 / P2** | Централизованный сервис бэкапов                     | Backup Plans & Vaults, Cross-Region/Account copy, Lifecycle to Glacier, AWS Organizations, Backtrack Policy. [Cheat Sheet](https://tutorialsdojo.com/aws-backup/)                                                                    |
| **AWS DataSync**                                     | **A1 / P1** | Высокоскоростной перенос файлов                     | Agent (VM/EC2), NFS/SMB/S3/EFS/FSx endpoints, filters, incremental transfers, scheduling, encryption-in-transit, CloudWatch metrics. [Cheat Sheet](https://tutorialsdojo.com/aws-datasync/)                                     |
| **AWS Data Exchange**                                | **A1 / P1** | Публикация и подписка на внешние наборы данных      | Products, Datasets, Revisions, Subscription Jobs, Delivery to S3, Entitlements API. [Cheat Sheet](https://tutorialsdojo.com/aws-data-exchange/)                                                                                   |
| **AWS Transfer Family**                              | **A1 / P1** | Управляемый SFTP/FTPS/FTP → S3/EFS                   | Identity Providers, custom hostname, VPC Endpoints, auto-scaling, CloudWatch logging, KMS-шифрование. [Cheat Sheet](https://tutorialsdojo.com/aws-transfer-family/)                                                              |

## 3. Database Services

| **Название сервиса**    | **Глубина** | **Кратко о применении**                                  | **Подробности**                                                                                                                                                             |
|-------------------------|:-----------:|----------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Amazon RDS**          | **A3 / P3** | Управляемые реляционные БД (MySQL, PostgreSQL, SQL Server и др.) | Multi-AZ, Read Replicas, RDS Proxy, Snapshots & PITR, Performance Insights, Reserved Instances vs Savings Plans, IAM DB Auth. [Cheat Sheet](https://tutorialsdojo.com/amazon-relational-database-service-amazon-rds/) |
| **Amazon Aurora**       | **A2 / P2** | Высокопроизводительная совместимая с MySQL/PostgreSQL СУБД | 6-копий в 3 AZ, Global Database, Serverless v2, Backtrack, Parallel Query, авто-failover < 30 с. [Cheat Sheet](https://tutorialsdojo.com/amazon-aurora/)                        |
| **Amazon DynamoDB**     | **A3 / P3** | Serverless NoSQL (ключ-значение/документ)                | On-Demand vs Provisioned, GSI/LSI, DAX, PartiQL, Streams, TTL, Backup/PITR, Auto Scaling & Adaptive Capacity, Global Tables. [Cheat Sheet](https://tutorialsdojo.com/amazon-dynamodb/) |
| **Amazon Redshift**     | **A1 / P2** | Колонночный аналитический Data Warehouse                  | RA3 vs DC2, Spectrum, Concurrency Scaling, AQUA, Materialized Views, Snapshots & Cross-Region DR, WLM queues. [Cheat Sheet](https://tutorialsdojo.com/amazon-redshift/)        |
| **Amazon ElastiCache**  | **A1 / P2** | Управляемый кэш Redis/Memcached                           | Cluster-Mode On/Off, Multi-AZ с Auto-Failover, Data Tiering, шифрование in-transit/at-rest, Backup/Restore, Parameter Groups. [Cheat Sheet](https://tutorialsdojo.com/amazon-elasticache/) |
| **Amazon DocumentDB**   | **A1 / P1** | MongoDB-совместимая управляемая документная БД            | 6-копий хранения в 3 AZ, Reader/Writer Endpoints, авто-масштабирование instance/storage, ограниченный API vs MongoDB. [Cheat Sheet](https://tutorialsdojo.com/amazon-documentdb/) |
| **Amazon Timestream**   | **A1 / P1** | Serverless time-series БД для IoT и операционных метрик   | Memory vs Magnetic Store, Retention Policies, server-side rollups, SQL-like queries, autoscale ingest rate. [Cheat Sheet](https://tutorialsdojo.com/amazon-timestream/)           |
| **Amazon Neptune**      | **A1 / P1** | fully managed графовая база данных   | Предназначенна для хранения и запросов связанных данных с высокой производительностью. Поддерживает как графы свойств (Property Graph), так и семантические графы (RDF).  (Нужно знать, что такая есть, это достаточно )      |

## 4. Networking & Content Delivery

| **Название сервиса**                | **Глубина** | **Кратко о применении**                          | **Подробности**                                                                                                                                                   |
|-------------------------------------|:-----------:|--------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Amazon VPC**                      | **A3 / P3** | Логически изолированная сеть в AWS               | CIDR-планирование, Subnets (public/private), Route Tables, IGW/NAT, Security Groups vs NACL, VPC Endpoints, VPC Peering, Flow Logs, IPv6, DNS Options. [Cheat Sheet](https://tutorialsdojo.com/amazon-vpc/) |
| **AWS Route 53**                    | **A3 / P3** | DNS и маршрутизация трафика                      | Hosted Zones, Record Types, Alias vs CNAME, Routing Policies (Simple, Weighted, Latency, Geo, Failover), Health Checks, DNSSEC. [Cheat Sheet](https://tutorialsdojo.com/amazon-route-53/)       |
| **Amazon CloudFront**               | **A2 / P3** | Глобальная CDN                                   | Edge Locations, Cache Behaviors, Origin Types (S3, ALB, API Gateway), Signed URLs/Cookies, Field-Level Encryption, Origin Shield, Invalidations. [Cheat Sheet](https://tutorialsdojo.com/amazon-cloudfront/) |
| **AWS Global Accelerator**          | **A1 / P2** | Оптимизация доступности и производительности      | Static Anycast IP, Endpoint Groups, Health Checks, Regional Failover, TCP/UDP-ускорение по AWS backbone. [Cheat Sheet](https://tutorialsdojo.com/aws-global-accelerator/)                           |
| **AWS Direct Connect**              | **A2 / P3** | Выделенное соединение On-Prem ↔ AWS               | LAG, Private/Public/Transit VIF, BGP, MACsec, DX Gateway, VPN-failover, оплата Port-hour + Data. [Cheat Sheet](https://tutorialsdojo.com/aws-direct-connect/)                                            |
| **Elastic Load Balancing (ELB)**    | **A2 / P3** | Балансировка нагрузки L7/ALB, L4/NLB, appliance   | Listeners, Target Groups, TLS Termination, Sticky Sessions, Health Checks, Cross-Zone Load, Access Logs, Connection Draining. [Cheat Sheet](https://tutorialsdojo.com/aws-elastic-load-balancing-elb/) |
| **AWS Network Firewall**            | **A1 / P2** | Управляемый сетевой фаервол для VPC               | Stateful/stateless rules, Suricata-движок, Firewall Policies & Rule Groups, Logging to CloudWatch/Kinesis, AWS Firewall Manager интеграция. [Cheat Sheet](https://tutorialsdojo.com/aws-network-firewall/) |

## 5. Security, Identity & Compliance

| **Название сервиса**                                    | **Глубина** | **Кратко о применении**                                   | **Подробности** |
|---------------------------------------------------------|:---------------------:|-----------------------------------------------------------|-----------------|
| **AWS IAM**                                             | **A3 / P3**           | Управление идентификацией и доступом                      | Пользователи, группы, роли, политики JSON, MFA, IAM Roles for Service, Federation (OIDC/SAML), IAM Access Analyzer. [Cheat Sheet](https://tutorialsdojo.com/aws-identity-and-access-management-iam/) |
| **AWS IAM Access Analyzer**                             | **A1 / P2**           | Анализ внешних прав доступа к ресурсам                    | Генерация IAM Policy на основании реального доступа, Resource Analyzer для S3, KMS, IAM, Lake Formation. [Cheat Sheet](https://tutorialsdojo.com/aws-iam-access-analyzer/) |
| **AWS STS (Security Token Service)**                    | **A2 / P2**           | Выдача временных учётных данных                           | AssumeRole, Federation, Web Identity, Session Duration, Policy Evaluation. [Cheat Sheet](https://tutorialsdojo.com/aws-security-token-service-sts/) |
| **AWS CloudTrail**                                      | **A2 / P3**           | Аудит и запись API-логов                                  | Management vs Data Events, Multi-Region Trails, Insights, лог-file integrity validation, интеграция с CloudWatch Logs. [Cheat Sheet](https://tutorialsdojo.com/aws-cloudtrail/) |
| **AWS KMS**                                             | **A2 / P2**           | Централизованное управление криптографическими ключами     | Symmetric vs Asymmetric CMKs, Key Policies vs IAM Policies, Envelope Encryption, Automatic Rotation, Grants. [Cheat Sheet](https://tutorialsdojo.com/aws-key-management-service-aws-kms/) |
| **AWS Cognito**                                         | **A2 / P2**           | Аутентификация и авторизация для веб и мобильных приложений | User Pools, Identity Pools, Federated Identities, Hosted UI, Triggers (Lambda), Security Features. [Cheat Sheet](https://tutorialsdojo.com/amazon-cognito/) |
| **AWS Directory Service**                               | **A1 / P2**           | Интеграция с Microsoft AD в AWS                           | AD Connector, AWS Managed AD, Simple AD, Trusts, AD-aware приложения. [Cheat Sheet](https://tutorialsdojo.com/aws-directory-service/) |
| **AWS IAM Identity Center (AWS SSO)**                   | **A2 / P2**           | Централизованное SSO для AWS и SaaS                       | Permission Sets, SCIM Provisioning, AD Connector, Credential Synchronization, Session Duration. [Cheat Sheet](https://tutorialsdojo.com/aws-single-sign-on-aws-sso/) |
| **AWS Control Tower**                                   | **A1 / P2**           | Быстрое развёртывание безопасной многоконтурной среды     | Landing Zone, Guardrails (SCP/Config), Account Factory, Audit/Log Accounts, Lifecycle Events. [Cheat Sheet](https://tutorialsdojo.com/aws-control-tower/) |
| **AWS Resource Access Manager (RAM)**                   | **A1 / P2**           | Безопасный шаринг ресурсов между аккаунтами               | Resource Shares, Principals (OU, Account), supported ARNs (VPC, Transit Gateway, License Configurations). [Cheat Sheet](https://tutorialsdojo.com/aws-resource-access-manager-ram/) |
| **AWS Certificate Manager (ACM)**                       | **A2 / P2**           | Управление SSL/TLS сертификатами                          | Public vs Private CA, DNS/Email Validation, Regional vs Global (CloudFront), ACM PCA, Rotation. [Cheat Sheet](https://tutorialsdojo.com/aws-certificate-manager/) |
| **AWS CloudHSM**                                        | **A1 / P1**           | Выделенные HSM для критичных ключей                       | Cluster Modes, Backup & Restore, Client SDK, High Availability, FIPS 140-2. [Cheat Sheet](https://tutorialsdojo.com/aws-cloudhsm/) |
| **AWS Shield & AWS WAF**                                | **A2 / P3**           | Защита от DDoS (Shield) и веб-угроз (WAF)                  | Shield Standard/Advanced, WebACL, Managed Rules, Rate-Based Rules, CAPTCHA, integration with CloudFront/ALB. [Shield](https://tutorialsdojo.com/aws-shield/) / [WAF](https://tutorialsdojo.com/aws-waf/) |
| **AWS Firewall Manager**                                | **A1 / P3**           | Централизованное управление политиками безопасности       | Policy Types (WAF, Shield Advanced, Security Groups), Organization Scopes, Compliance Reports. [Cheat Sheet](https://tutorialsdojo.com/aws-firewall-manager/) |
| **AWS Security Hub**                                    | **A1 / P2**           | Аггрегация и управление предупреждениями безопасности     | Standards (CIS, PCI), Insights, Automations, Cross-Account Aggregation. [Cheat Sheet](https://tutorialsdojo.com/aws-security-hub/) |
| **Amazon Macie**                                        | **A1 / P1**           | Классификация и защита конфиденциальных данных в S3      | Sensitive Data Discovery, Data Access Monitoring, Alerts, Integration with Security Hub. [Cheat Sheet](https://tutorialsdojo.com/amazon-macie/) |
| **AWS Config**                                          | **A2 / P3**           | Непрерывный аудит конфигураций ресурсов                   | Config Rules (managed/custom), Conformance Packs, Aggregators, Remediation, Recording Groups. [Cheat Sheet](https://tutorialsdojo.com/aws-config/) |
| **Amazon GuardDuty**                                    | **A1 / P2**           | Обнаружение угроз на основе ML и логов                     | Threat Lists, Anomaly Detection, Findings, Integration with Security Hub, EventBridge Actions. [Cheat Sheet](https://tutorialsdojo.com/amazon-guardduty/) |
| **Amazon Detective**                                    | **A1 / P2**           | Анализ и расследование инцидентов безопасности            | Graph Modeling, Timeline View, Integration with CloudTrail/GuardDuty/Macie, Root-Cause Analysis. [Cheat Sheet](https://tutorialsdojo.com/amazon-detective/) |
| **Amazon Inspector**                                    | **A1 / P2**           | Автоматизированная оценка уязвимостей                     | Assessment Targets, Templates, Rules Packages (CIS/PCI), Findings, Integration with Security Hub. [Cheat Sheet](https://tutorialsdojo.com/amazon-inspector/) |

## AWS Security Services - подробнее об самых запутаных... :)

### 1. Amazon Inspector

**Назначение:**  
Автоматическое сканирование уязвимостей в EC2, Lambda и контейнерах (ECR).

**Возможности:**
- Проверка на CVE-уязвимости.
- Сканирование образов при push в Amazon ECR.
- Приоритизация уязвимостей по уровню риска.
- Поддержка стандартов безопасности (CIS, PCI и др.).
- Интеграция с AWS Organizations, EventBridge, SNS.

**Когда использовать:**
- При CI/CD-деплое.
- Для соответствия требованиям безопасности.
- Для регулярных проверок инфраструктуры.

**Отличие от других:**
- Фокус на **уязвимостях и конфигурации ресурсов**, а не на анализе поведения или логов.

---

### 2. AWS Config

**Назначение:**  
Отслеживание изменений конфигурации ресурсов AWS и проверка соответствия политикам.

**Возможности:**
- История изменений и связей между ресурсами.
- AWS Config Rules (наборы политик соответствия).
- Conformance Packs (группы правил по стандартам).
- Хранение данных для аудита.
- Интеграция с CloudTrail, Security Hub.

**Когда использовать:**
- Для аудита и compliance.
- Для мониторинга drifts в IaC.
- В средах с жёсткими стандартами (NIST, HIPAA).

**Отличие от других:**
- Не ищет угрозы, а анализирует **конфигурации и изменения ресурсов**.

---

### 3. Amazon GuardDuty

**Назначение:**  
Выявление угроз на основе анализа логов (CloudTrail, VPC Flow Logs, DNS Logs).

**Возможности:**
- ML-детектирование аномалий и угроз.
- Обнаружение несанкционированного доступа, майнинга, ботнетов.
- Поддержка multi-account в Organizations.
- Интеграция с EventBridge, Security Hub.

**Когда использовать:**
- Для обнаружения атак и подозрительного поведения.
- В Security Operations Center.
- В продуктивной облачной среде.

**Отличие от других:**
- Не проверяет конфигурации, а **анализирует поведение и логи**.

---

### 4. Amazon Detective

**Назначение:**  
Анализ и расследование инцидентов безопасности на основе логов и связей.

**Возможности:**
- Построение графов связей между действиями, аккаунтами, ресурсами.
- Визуализация подозрительной активности.
- Глубокий анализ событий GuardDuty.
- Хронология инцидентов.

**Когда использовать:**
- После алерта от GuardDuty.
- Для расследования сложных инцидентов (компрометации IAM и др.).
- При построении систем Threat Hunting.

**Отличие от других:**
- Не обнаруживает угрозы, а **анализирует последствия и связи**.

---

## 🧩 Сравнительная таблица

| Сервис            | Назначение                    | Основные данные            | Специализация                      |
|------------------|-------------------------------|----------------------------|------------------------------------|
| Amazon Inspector | Сканирование уязвимостей      | Ресурсы и образы           | Security Assessment (CVE)         |
| AWS Config       | Аудит конфигураций            | Конфигурации и метаданные  | Compliance и Configuration Drift  |
| GuardDuty        | Обнаружение угроз             | Логи и сетевой трафик      | Threat Detection и ML             |
| Detective        | Расследование инцидентов      | События, логи, связи       | Threat Investigation               |

---


## 6. Management & Governance

| **Название сервиса**               | **Глубина** | **Кратко о применении**                                      | **Подробности** |
|------------------------------------|:---------------------:|--------------------------------------------------------------|-----------------|
| **AWS CloudFormation**             | **A2 / P3**           | Декларативное IaC для AWS                                   | Шаблоны (YAML/JSON), Change Sets, StackSets, Drift Detection, Nested Stacks, Stack Policies, Rollback Behaviors. [Cheat Sheet](https://tutorialsdojo.com/aws-cloudformation/) |
| **Amazon CloudWatch**              | **A3 / P3**           | Мониторинг метрик, логов, событий и алертов                  | Metrics (1-min & High-Res), Logs & Insights, Alarms & Composite Alarms, Dashboards, Synthetics, EventBridge интеграция. [Cheat Sheet](https://tutorialsdojo.com/amazon-cloudwatch/) |
| **AWS Systems Manager**            | **A2 / P3**           | Автоматизация операций и управление конфигурациями           | Session Manager, Run Command, Patch Manager, Automation, State Manager, Parameter Store (SecureString), Inventory, OpsCenter. [Cheat Sheet](https://tutorialsdojo.com/aws-systems-manager/) |
| **AWS Trusted Advisor**            | **A1 / P2**           | Рекомендации по Cost, Security, Performance, Fault Tolerance | 5 категорий чеков, Basic vs Business/Enterprise Support, Export Reports, Integration с AWS Support API. [Cheat Sheet](https://tutorialsdojo.com/aws-trusted-advisor/) |
| **AWS Service Catalog**            | **A1 / P2**           | Каталог одобренных продуктов и шаблонов                      | Portfolios, Products, Constraints (Launch, Tag), Service Actions, Terraform/OpenAPI support. [Cheat Sheet](https://tutorialsdojo.com/aws-service-catalog/) |
| **AWS Organizations**              | **A2 / P3**           | Централизованное управление аккаунтами и политиками           | OU-иерархия, Consolidated Billing, SCPs, Tag Policies, AWS Control Tower интеграция. [Cheat Sheet](https://tutorialsdojo.com/aws-organizations/) |
| **AWS License Manager**            | **A1 / P1**           | Управление лицензиями ПО                                     | License Configurations (vCPU, cores), Discovery via SSM Inventory, Cross-Region sync, Usage Tracking. [Cheat Sheet](https://tutorialsdojo.com/aws-license-manager/) |
| **AWS Service Quotas**             | **A1 / P2**           | Управление квотами сервисов                                 | Просмотр текущих лимитов, Request Quota Increases, Quota Metrics, Cross-Account views. [Cheat Sheet](https://tutorialsdojo.com/aws-service-quotas/) |
| **AWS CDK (Cloud Development Kit)**| **A2 / P2**           | IaC с использованием языков программирования                 | Constructs (L1–L3), Stacks, Apps, Synth → CFN, CLI Diff/Deploy, Context, Pipelines. [Cheat Sheet](https://tutorialsdojo.com/aws-cloud-development-kit-cdk/) |
| **Amazon Cloud Map**               | **A1 / P2**           | Сервис обнаружения и маршрутизации ресурсов                  | Namespaces, Services, Health Checks, DNS & API discovery, интеграция с App Mesh/ECS. [Cheat Sheet](https://tutorialsdojo.com/aws-cloud-map/) |

## 7. Application Integration

| **Название сервиса**     | **Глубина** | **Кратко о применении**                   | **Подробности**                                                                                                                                                   |
|--------------------------|:-----------:|-------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Amazon SNS**           | **A2 / P2** | Публикация/подписка на сообщения          | Topics, подписки (HTTP/S, email, SMS, SQS, Lambda), Message Filtering, FIFO Topics, DLQ, SSE-KMS. [Cheat Sheet](https://tutorialsdojo.com/amazon-sns/)              |
| **Amazon SQS**           | **A3 / P3** | Очереди сообщений для асинхронной работы  | Standard vs FIFO, Visibility Timeout, Long/Short Polling, DLQ, VPC Endpoints, Batch API, SSE-KMS, мониторинг Approximate Age. [Cheat Sheet](https://tutorialsdojo.com/amazon-sqs/) |
| **AWS Step Functions**   | **A1 / P2** | Оркестрация serverless-workflow           | Standard vs Express, ASL Definition, Catch/Retry, Map/Parallel, Integration с 200+ сервисами, Execution History. [Cheat Sheet](https://tutorialsdojo.com/aws-step-functions/) |
| **Amazon EventBridge**   | **A2 / P3** | Серверless шина событий                   | Default/Partner/Custom Bus, Rules (pattern-based), Schema Registry, Archives & Replay, API Destinations, cross-region failover, DLQ. [Cheat Sheet](https://tutorialsdojo.com/amazon-eventbridge/) |
| **Amazon MQ**            | **A1 / P1** | Управляемый брокер ActiveMQ/RabbitMQ      | Multi-AZ failover, AMQP/MQTT/STOMP/OpenWire, encryption in-transit/at-rest, LDAP auth, Prometheus-метрики. [Cheat Sheet](https://tutorialsdojo.com/amazon-mq/)         |
| **AWS App Mesh**         | **A1 / P2** | Сервис-меш для микросервисов              | Virtual Nodes/Services, Traffic Routing (Canary, Weighted), mTLS, Envoy-observability (metrics/logs), интеграция с Cloud Map. [Cheat Sheet](https://tutorialsdojo.com/aws-app-mesh/) |
| **AWS SWF**              | **A1 / P1** | Управляемый workflow-движок               | Activity & Decision Tasks, Timers, Task Lists, Coordination of long-running tasks, SDK integration. [Cheat Sheet](https://tutorialsdojo.com/aws-simple-workflow-service-swf/) |
| **AWS Glue**             | **A1 / P2** | Серверless ETL и каталогизация данных     | Crawlers, Jobs (Spark), Data Catalog, Workflows, Glue Studio, интеграция с Lake Formation и Athena. [Cheat Sheet](https://tutorialsdojo.com/aws-glue/)                |
| **AWS AppSync**          | **A1 / P2** | Серверless GraphQL API с офлайн и real-time | Resolvers (DynamoDB, Lambda, OpenSearch), Subscriptions, Caching, IAM/Cognito/OIDC Auth. [Cheat Sheet](https://tutorialsdojo.com/aws-appsync/)                           |

## 8. Analytics Services

| **Название сервиса**               | **Глубина** | **Кратко о применении**                   | **Подробности**                                                                                                                                                   |
|------------------------------------|:-----------:|-------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Amazon Athena**                  | **A2 / P2** | Ad-hoc SQL-запросы по данным в S3         | Интеграция с Glue Data Catalog, CTAS/UNLOAD, Partition Projection, Workgroups, Encryption at-rest/in-transit. [Cheat Sheet](https://tutorialsdojo.com/amazon-athena/)    |
| **Amazon EMR**                     | **A1 / P2** | Управляемый Hadoop/Spark кластер          | EMRFS для S3, Auto-Scaling, Instance Fleets/Groups, Bootstrap Actions, Serverless EMR. [Cheat Sheet](https://tutorialsdojo.com/amazon-emr/)                          |
| **Amazon Kinesis**                 | **A2 / P3** | Потоковая обработка данных в реальном времени | Data Streams (shards, Enhanced Fan-Out), Firehose (buffer size/interval), Data Analytics (SQL), Video Streams. [Cheat Sheet](https://tutorialsdojo.com/amazon-kinesis/) |
| **Amazon QuickSight**              | **A1 / P2** | BI-дашборды и визуализация                | SPICE in-memory engine, Row-Level Security, ML-Insights (анализ аномалий, прогнозы), Embedded Analytics. [Cheat Sheet](https://tutorialsdojo.com/amazon-quicksight/) |
| **AWS Glue**                       | **A2 / P2** | Серверless ETL и Data Catalog             | Crawlers, Jobs (PySpark/Scala), Workflows, Glue Studio, Schema Registry for Lake Formation. [Cheat Sheet](https://tutorialsdojo.com/aws-glue/)                       |
| **Amazon Redshift**                | **A1 / P2** | Аналитический data warehouse              | RA3 vs DC2, Spectrum, Concurrency Scaling, Materialized Views, WLM queues, Snapshot & Restore. [Cheat Sheet](https://tutorialsdojo.com/amazon-redshift/)             |
| **Amazon OpenSearch Service**      | **A1 / P2** | Search & лог-аналитика                    | Domains, UltraWarm/Cold Storage, Index State Management, Fine-Grained Access, Kibana/OpenSearch Dashboards. [Cheat Sheet](https://tutorialsdojo.com/amazon-opensearch-service/) |
| **AWS Data Pipeline**              | **A1 / P1** | Оркестрация ETL-пайплайнов                | Activities, Pipelines, Scheduler, Dependency Management, интеграция с S3/EMR/RDS. [Cheat Sheet](https://tutorialsdojo.com/aws-data-pipeline/)                         |
| **AWS Lake Formation**             | **A1 / P2** | Управление и безопасность Data Lake       | LF-Tags, Governed Tables, Blueprints ingestion, Fine-Grained Access, Audit Logging. [Cheat Sheet](https://tutorialsdojo.com/aws-lake-formation/)                   |
| **Amazon Timestream**              | **A1 / P1** | Time-series БД для IoT и операционных метрик | Memory vs Magnetic Store, Retention Policies, Server-side downsampling, SQL-like queries. [Cheat Sheet](https://tutorialsdojo.com/amazon-timestream/)                    |

## 9. Machine Learning Services

| **Название сервиса**        | **Глубина** | **Кратко о применении**                                  | **Подробности** |
|-----------------------------|:---------------------:|----------------------------------------------------------|-----------------|
| **Amazon SageMaker**        | **A2 / P2**           | Полный цикл ML: сборка, обучение, развертывание          | Studio IDE, Training Jobs, Hosted Endpoints, Pipelines, Autopilot, Debugger, Model Monitor. [Cheat Sheet](https://tutorialsdojo.com/amazon-sagemaker/) |
| **Amazon Comprehend**       | **A1 / P2**           | NLP: анализ тональности, сущностей, ключевых фраз        | Sentiment, Entities, Key Phrases, Syntax, Custom Classifiers, PII Detection, Batch vs Real-Time. [Cheat Sheet](https://tutorialsdojo.com/amazon-comprehend/) |
| **Amazon Rekognition**      | **A1 / P2**           | Анализ изображений и видео: лица, объекты, контент-модерация | Label Detection, Face Recognition, Celebrity Recognition, Text in Image, Unsafe Content, Streaming Video. [Cheat Sheet](https://tutorialsdojo.com/amazon-rekognition/) |
| **Amazon Lex**              | **A1 / P2**           | Голосовые и чат-боты с NLU/ASR                            | Intents, Slots, Prompts, Fulfillment via Lambda, Multi-language, Contexts, Versions & Aliases. [Cheat Sheet](https://tutorialsdojo.com/amazon-lex/) |
| **Amazon Polly**            | **A1 / P2**           | Преобразование текста в речь                              | Standard & Neural Voices, SSML Support, Lexicons, Speech Marks, API Streaming. [Cheat Sheet](https://tutorialsdojo.com/amazon-polly/) |
| **Amazon Translate**        | **A1 / P2**           | Машинный перевод текста                                   | Real-time & Batch Translation, Custom Terminology, Parallel Data, Formality Control. [Cheat Sheet](https://tutorialsdojo.com/amazon-translate/) |
| **Amazon Forecast**         | **A1 / P2**           | Прогнозирование временных рядов                           | Dataset Groups, Predictors, Forecast Export, Backtest Windows, Explainability. [Cheat Sheet](https://tutorialsdojo.com/amazon-forecast/) |
| **Amazon Kendra**           | **A1 / P2**           | Интеллектуальный поиск по корпоративным данным            | Data Sources (S3, RDS, FSx), Query Autocomplete, Relevance Tuning, Access Control. [Cheat Sheet](https://tutorialsdojo.com/amazon-kendra/) |
| **Amazon Personalize**      | **A1 / P2**           | Персональные рекомендации                                  | Datasets → Solutions → Campaigns, Event Tracker, Real-Time Recommendations, Filters. [Cheat Sheet](https://tutorialsdojo.com/amazon-personalize/) |
| **Amazon Textract**         | **A1 / P2**           | Извлечение текста и структурированных данных из документов | Detect Document Text, Analyze Document (Forms/Tables), Expense & ID Models, Output JSON/CSV. [Cheat Sheet](https://tutorialsdojo.com/amazon-textract/) |

## 10. Developer Tools

| **Название сервиса**         | **Глубина** | **Кратко о применении**                           | **Подробности** |
|------------------------------|:---------------------:|---------------------------------------------------|-----------------|
| **AWS CodeCommit (will be removed soon)**           | **A0 / P0**           | Управляемые Git-репозитории                       | Ветвление, слияние, шифрование KMS, триггеры (SNS/Lambda), VPC Endpoints. [Cheat Sheet](https://tutorialsdojo.com/aws-codecommit/) |
| **AWS CodeBuild**            | **A1 / P2**           | CI-сервис сборки и тестирования                   | `buildspec.yml`, Compute Types, кэширование (S3/EFS), batch builds, отчёты, VPC интеграция. [Cheat Sheet](https://tutorialsdojo.com/aws-codebuild/) |
| **AWS CodeDeploy**           | **A1 / P2**           | Автоматизация деплоя на EC2, Lambda, On-Prem      | In-Place vs Blue/Green, `appspec.yml`, Rollbacks, Lifecycle Hooks, интеграция с Auto Scaling. [Cheat Sheet](https://tutorialsdojo.com/aws-codedeploy/) |
| **AWS CodePipeline**         | **A1 / P2**           | Оркестрация CI/CD конвейера                       | Stages & Actions, Manual Approvals, Parallel Actions, cross-account Artifacts, Webhooks, интеграция с GitHub/CodeCommit. [Cheat Sheet](https://tutorialsdojo.com/aws-codepipeline/) |
| **AWS CodeStar**             | **A1 / P1**           | Быстрый запуск DevOps-проектов                    | Шаблоны проектов, интегрированный Dashboard, IAM-роли команд, единая консоль CI/CD. [Cheat Sheet](https://tutorialsdojo.com/aws-codestar/) |
| **AWS X-Ray**                | **A1 / P2**           | Трассировка и анализ производительности           | Segments/Subsegments, Service Maps, Sampling Rules, рекурсия, интеграция с Lambda, ECS, EC2. [Cheat Sheet](https://tutorialsdojo.com/aws-x-ray/) |
| **AWS Cloud9**               | **A1 / P1**           | Облачный IDE с доступом к AWS                     | Поддержка множества языков, совместное редактирование, терминал с IAM-ролью, SSH/EC2 среды. [Cheat Sheet](https://tutorialsdojo.com/aws-cloud9/) |
| **AWS SDKs**                 | **A1 / P2**           | Библиотеки для интеграции AWS в код               | Поддержка Python, JavaScript, Java, .NET и др.; автоматическая обработка подписей, retry logic, пагинация. [Cheat Sheet](https://tutorialsdojo.com/aws-software-development-kits-sdks/) |
| **Amazon CodeGuru**          | **A1 / P2**           | ML-анализ кода и профилирование приложений        | Reviewer (Pull Request рекомендации), Profiler (узкие места CPU/Heap), интеграция с CodeCommit/GitHub. [Cheat Sheet](https://tutorialsdojo.com/amazon-codeguru/) |
| **AWS SAM (Serverless Application Model)** | **A2 / P2** | Фреймворк для серверлес-приложений                | `sam.yml` шаблоны, локальное тестирование, CLI команды (build, deploy), интеграция с API Gateway/Lambda/DynamoDB. [Cheat Sheet](https://tutorialsdojo.com/aws-serverless-application-model-sam/) |

## 11. Migration & Transfer

| **Название сервиса**                                    | **Глубина** | **Кратко о применении**                   | **Подробности** |
|---------------------------------------------------------|:---------------------:|-------------------------------------------|-----------------|
| **AWS Database Migration Service (DMS)**                | **A2 / P3**           | Репликация и миграция БД                  | Homogeneous vs Heterogeneous, Full Load + CDC, AWS SCT для преобразования схем, Multi-AZ, Replication Instance (классы инстансов, настройки масштабирования), Endpoints (S3, Kinesis, Redshift), мониторинг CloudWatch. [Cheat Sheet](https://tutorialsdojo.com/aws-database-migration-service/) |
| **AWS Server Migration Service (SMS)**                  | **A1 / P2**           | Лифт-&-шифт ВМ на EC2                      | Agentless replication через AWS Connector, incremental replication, Launch Settings (instance type, subnet), Cutover orchestration, Integration с Migration Hub. [Cheat Sheet](https://tutorialsdojo.com/aws-server-migration-service-sms/) |
| **AWS Application Migration Service (MGN)**             | **A1 / P2**           | Лифт-&-шифт серверов (преемник SMS)        | Continuous Block Replication, non-disruptive Tests, Launch Settings Blueprint, Post-launch Actions (SSM Automation), Orchestration через Migration Hub. [Cheat Sheet](https://tutorialsdojo.com/aws-application-migration-service/) |
| **AWS DataSync**                                        | **A1 / P2**           | Высокоскоростной перенос файлов           | Agent (VM/EC2/OpsHub), NFS/SMB/S3/EFS/FSx endpoints, Filters, Scheduling, Encryption in-transit, VPC Endpoints, Metrics & Logs. [Cheat Sheet](https://tutorialsdojo.com/aws-datasync/) |
| **AWS Snowball & Snowball Edge**                        | **A1 / P1**           | Физический перенос больших объёмов данных | Устройства 50 TB/80 TB, Edge Compute (Lambda/EC2), End-to-End шифрование, Job Management (90-120 days), E-Ink этикетки, Integration с S3 Import/Export. [Cheat Sheet](https://tutorialsdojo.com/aws-snowball/) |
| **AWS Migration Hub**                                   | **A1 / P2**           | Централизованный трекинг миграций          | Aggregates status DMS/SMS/MGN, Application Discovery integration, Migration Projects, Permissions (MigrationHub-Dashboard), SDK & CLI support. [Cheat Sheet](https://tutorialsdojo.com/aws-migration-hub/) |
| **AWS Application Discovery Service**                   | **A1 / P2**           | Сбор характеристик on-prem инфраструктуры  | Agentless vs Agent-based, Server Specs / Process data, Export CSV, Integration с Migration Hub & DMS, Dependencies Mapping. [Cheat Sheet](https://tutorialsdojo.com/aws-application-discovery-service/) |
| **AWS Elastic Disaster Recovery (CloudEndure DRS)**     | **A1 / P2**           | DR / Recovery через непрерывную репликацию  | Continuous Replication Server, Staging Area ss, Recovery Instances, Launch Configuration Templates, Orchestration, Cost Optimization (journal, cutover). [Cheat Sheet](https://tutorialsdojo.com/aws-disaster-recovery/) |

## 12. Other Key Services

| **Название сервиса**        | **Глубина (AX / PX)** | **Кратко о применении**                                | **Подробности** |
|-----------------------------|:---------------------:|--------------------------------------------------------|-----------------|
| **AWS AppFlow**             | **A2 / P2**           | Интеграция данных между AWS и SaaS                     | Подключения к Salesforce, SAP, Google Analytics и др.; двунаправленные потоки; мэппинг и трансформации; расписания и триггеры; шифрование в-транзите. [Cheat Sheet](https://tutorialsdojo.com/aws-appflow/) |
| **AWS Marketplace**         | **A1 / P1**           | Каталог сторонних приложений и данных для AWS          | SaaS, AMI, контейнеры, Data Products; покупки по подписке или разово; интеграция с биллингом AWS; Private Marketplace для организаций. [Cheat Sheet](https://tutorialsdojo.com/aws-marketplace/) |
| **AWS Ground Station**      | **A1 / P2**           | Приём и обработка спутниковых данных                   | Контакты с антеннами, приём в S3/Kinesis, интеграция с EC2/EKS; расписание слотов; шифрование и аутентификация; low-latency pipeline. [Cheat Sheet](https://tutorialsdojo.com/aws-ground-station/) |
| **Amazon Cloud Map**        | **A1 / P2**           | Обнаружение и маршрутизация сервисов                   | Namespaces (DNS / API), Health Checks, Service Registrations, интеграция с ECS / App Mesh / Lambda для динамического discovery. [Cheat Sheet](https://tutorialsdojo.com/aws-cloud-map/) |
| **Amazon SES**              | **A1 / P2**           | Массовая и транзакционная рассылка email               | SMTP/API; DKIM/SPF; dedicated IP vs shared; Deliverability Dashboard; Configuration Sets; Event Publishing (SNS, CloudWatch). [Cheat Sheet](https://tutorialsdojo.com/amazon-ses/) |
| **Amazon Pinpoint**         | **A1 / P2**           | Мультиканальное взаимодействие с клиентами             | Email, SMS, Push, Voice кампании; сегментация; аналитика открытия/кликов; A/B-тестирование; интеграция с Lambda для кастомизации. [Cheat Sheet](https://tutorialsdojo.com/amazon-pinpoint/) |
| **AWS IoT Greengrass**      | **A1 / P2**           | Edge-вычисления и взаимодействие с AWS IoT             | Локальный выполнение Lambda, ML-инференс; синхронный/асинхронный обмен сообщениями; Device Shadows; OTA-обновления; защищённые соединения. [Cheat Sheet](https://tutorialsdojo.com/iot-greengrass/) |

---
