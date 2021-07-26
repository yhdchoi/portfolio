<template>
  <div class="h-full bg-black p-10 text-center">
    <div class="w-full">
      <h1 class="font-bold text-5xl text-green-300  hover:text-green-600 mb-10">
        AWS
      </h1>
      <p></p>
    </div>
    <div class="max-w-lg mx-auto">
      <div class="text-xl text-white mb-3">
        <p>
          An experimental project with Amazon Web Service.
        </p>
      </div>
    </div>
    <br />
    <div class="max-w-lg mx-auto">
      <div class="text-white mb-4">
        <h5 class="text-3xl text-pink-200 font-bold mb-2">Contents:</h5>
        <ul class="text-lg">
          <li>Introduction</li>
          <li>Virtual Private Cloud (VPC)</li>
          <li>Security Groups</li>
          <li>Public & Private Services</li>
          <li>Elastic Compute Cloud (EC2)</li>
          <li>Storage Services (EBS, EFS & S3)</li>
          <li>Database (RDS & DynamoDB)</li>
          <li>Cloud Formation</li>
          <li>Beanstalk</li>
        </ul>
        <p class="text-sm">
          Reference: Images by Neal Davis - Founder of Digital Cloud Training
        </p>
      </div>
    </div>
    <br />

    <!-- Intro -->
    <div class="max-w-lg mx-auto mb-4">
      <div
        class="text-3xl font-bold text-purple-300 hover:text-purple-500 mb-2"
      >
        <p>
          1. Introduction
        </p>
      </div>
    </div>
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      The AWS Global Infrastructure is composed of 24 regions around the world.
      Every region is connected via a high bandwidth and fully redundant
      network. Each region is compleletly independent. And each region consists
      of two or more Avaliability zones with several data centers.
    </p>
    <img class="w-3/5 mb-6 m-auto" src="" />

    <br />

    <!-- VPC -->
    <div class="max-w-lg mx-auto mb-4">
      <div class="text-3xl font-bold text-blue-300 hover:text-purple-500 mb-2">
        <p>
          2. Virtual Private Cloud (VPC)
        </p>
      </div>
    </div>
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      Each VPC is contained within a single region and user creates Subnets
      within Availability Zone. Within each subnets, you can deploy your data.
      The access is controlled by the Router. In order to manipulate the router
      we need to create a main router table which contains address and target to
      our subnets.
    </p>
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      Within your subnets you can launch virtual server = EC2 instance. We have
      two kind of subnets which are Public and Private. The public subnets are
      open to the public and private is closed and only can be accessed by the
      root user.
    </p>
    <img class="w-3/5 mb-6 m-auto" src="../assets/AWS/vpc.png" />

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      Within your subnets you can launch virtual server = EC2 instance. We have
      two kind of subnets which are Public and Private. The public subnets are
      open to the public and private is closed and only can be accessed by the
      root user.
    </p>
    <img class="w-3/5 mb-10 m-auto" src="../assets/AWS/subnetec2.png" />

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      You can create multiple VPC within each region. Each VPC has a separate
      block of IP addresses from the CIDR block. CIDR stands for Classless
      Interdomain Routing which is an advanced IP address concept.
    </p>
    <img class="w-3/5 mb-10 m-auto" src="../assets/AWS/multivpc.png" />

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      In the AWS management console you can access the VPC menu. For default, a
      VPC is created for you in each region.
    </p>
    <img class="w-3/5 mb-10 m-auto" src="../assets/AWS/consolevpc.png" />

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      Here are three subnets that are created from 3 different regions.
    </p>
    <img class="w-3/5 mb-10 m-auto" src="../assets/AWS/subnetlist.png" />

    <br />

    <!-- Security Groups -->
    <div class="max-w-lg mx-auto mb-4">
      <div class="text-3xl font-bold text-pink-300 hover:text-pink-500 mb-2">
        <p>
          3. Security Groups
        </p>
      </div>
    </div>
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      The Security Groups & Network Access Control Lists (NACLs) are types of
      firewalls which you can user to protect your resources. The security
      groups are allpied at the instance level and NACLs are applied at the
      subnet level. The security groups can be applied to instances in any
      subnet.
    </p>
    <img class="w-3/5 mb-10 m-auto" src="../assets/AWS/secgrpnacls.png" />

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      We can assign different rules to inbound and outbound access to the NACL.
    </p>
    <img class="w-3/5 mb-6 m-auto" src="../assets/AWS/naclin.png" />
    <img class="w-3/5 mb-10 m-auto" src="../assets/AWS/naclout.png" />

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      We can also assign rules to the inbound and outbound traffic from Security
      Groups. By default it allows all traffics.
    </p>
    <img class="w-3/5 mb-6 m-auto" src="../assets/AWS/sgin.png" />
    <img class="w-3/5 mb-10 m-auto" src="../assets/AWS/sgout.png" />
    <br />

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      A Stateful firewall allows the return traffic automatically but Stateless
      firewall will check for an allow rule for both connections. <br />
      <br />
      The Security Groups are Stateful firewall and the NACLs are Stateless
      firewall.
    </p>
    <img class="w-3/5 mb-6 m-auto" src="../assets/AWS/ssfirewalls.png" />
    <img class="w-3/5 mb-10 m-auto" src="../assets/AWS/tablesec.png" />

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      The private services such as EC2 and RDS that we create are within the
      Amazon VPC which are private but can allow access by the public to a
      certain degree. And those services such as DynamoDB and S3 are open public
      services that can be accessed by the public network.
    </p>
    <img class="w-3/5 mb-10 m-auto" src="../assets/AWS/publicpriv.png" />

    <br />

    <!-- Public & Private -->
    <div class="max-w-lg mx-auto mb-4">
      <div class="text-3xl font-bold text-green-300 hover:text-green-500 mb-2">
        <p>
          4. Elastic Compute Cloud (EC2)
        </p>
      </div>
    </div>

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      The each instances are like virtual server and there are actual physical
      servers which are managed by AWS. Each instances carry certain amount of
      hardware performance. And each can have either Linux or <br />
      Windows OS.
    </p>
    <img class="w-3/5 mb-10 m-auto" src="../assets/AWS/ec2dia.png" />

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      Each instances requires an IP addresses and the 3 types as follow.
    </p>
    <img class="w-3/5 mb-10 m-auto" src="../assets/AWS/ec2ipchart.png" />

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      The first diagram shows how the instance within public subnet connects to
      the gateway. Here we have an Elastic or Public IP connected to the
      Internet. If we have a private instance it connects to the NAT gateway
      with private IP and the NAT gateway forwards it to the Internet with
      Elastic IP.
    </p>
    <img class="w-3/5 mb-6 m-auto" src="../assets/AWS/ec2subnetpub.png" />
    <img class="w-3/5 mb-10 m-auto" src="../assets/AWS/ec2subnet.png" />

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      To create an instance, go to EC2 under service menu and select instance
      from side menu. Select the Launch Instance button and follow the steps.
      After finishing and Launch your instance, you must create and save a key
      pair. After saving your key pair to your compputer, select Connect then in
      your teminal window, go to the directory where you have the Key Pair
      saved. Then copy and paste the chmod command and then DNS command which
      starts with ec2- . Run yum update -y to update the packages.
    </p>
    <img class="w-3/5 mb-6 m-auto" src="../assets/AWS/instancestart.png" />
    <img class="w-3/5 mb-6 m-auto" src="../assets/AWS/st1.png" />
    <img class="w-3/5 mb-6 m-auto" src="../assets/AWS/kpadd2.png" />
    <img class="w-3/5 mb-6 m-auto" src="../assets/AWS/success.png" />
    <img class="w-3/5 mb-6 m-auto" src="../assets/AWS/success2.png" />
    <img class="w-3/5 mb-6 m-auto" src="../assets/AWS/ssh.png" />
    <img class="w-3/5 mb-6 m-auto" src="../assets/AWS/sshsuccess.png" />
    <img class="w-3/5 mb-10 m-auto" src="../assets/AWS/sshupdatedone.png" />

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      The Auto Scaling feature will automatically launch or terminate instances
      to replace failed instances or react to meet the demand.
    </p>
    <img class="w-3/5 mb-6 m-auto" src="../assets/AWS/ec2autoscalingfail.png" />

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      A Target Tracking Scaling Policy sets parameters where Auto Scaling
      controls the number of instances according to the cpu performance.
    </p>
    <img
      class="w-3/5 mb-10 m-auto"
      src="../assets/AWS/ec2autoscalingcreate.png"
    />

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      The Elastic Load Balancer works with the Auto Scaling feature to increase
      availability and reduce tolerance. This architecture include high
      availability and fault tolerance.
    </p>
    <img class="w-3/5 mb-6 m-auto" src="../assets/AWS/loadbalancer.png" />

    <br />

    <!-- Storage Services 2:10-->
    <div class="max-w-lg mx-auto mb-4">
      <div
        class="text-3xl font-bold text-purple-300 hover:text-purple-500 mb-2"
      >
        <p>
          5. Storage Services (EBS, EFS & S3)
        </p>
      </div>
    </div>

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      EBS (Elastic Block Store) is block-based storage system where a
      block-based volume such as HDD or SSD connected over a network. EFS is a
      file based storage system which is a file system that is presented to you.
      It's only available on Linux and can be connected via on-premises client
      remotely. S3 is object based storage system and accessed through a URL.
      And the files are uploaded using REST API.
    </p>
    <img class="w-3/5 mb-10 m-auto" src="../assets/AWS/storage.png" />

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      With EBS, volumns are attached to EC2 over a network. The volumns are
      replicated within the availability zone. EBS is found within the EC2
      Dashboard.
    </p>
    <img class="w-3/5 mb-6 m-auto" src="../assets/AWS/ebsstorage.png" />
    <img class="w-3/5 mb-6 m-auto" src="../assets/AWS/ebsconsole.png" />
    <img class="w-3/5 mb-10 m-auto" src="../assets/AWS/ebscreate.png" />

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      Instance volumns performes superior compared to the EBS volumns because
      they are directly attached to the instances. And they are ephemeral
      storages where you lose the data when you shutdown the service.
    </p>
    <img class="w-3/5 mb-10 m-auto" src="../assets/AWS/ebsinstance.png" />

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      When using the instance volumn, you can create SnapShots of your volumn
      and back them up to the S3. And when needed you can restore your volumn.
      In order to restore, you need to create an instance with ebs volume
      attached.
    </p>
    <img class="w-3/5 mb-6 m-auto" src="../assets/AWS/ebssnapshot.png" />
    <img class="w-3/5 mb-10 m-auto" src="../assets/AWS/snapshot1.png" />

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      EFS is Linux only file system where you can connect from two or more
      instances simultaneously at the same time. In order to set up, you need to
      create two instances and one EFS. Login to your instances separately and
      use the EFS mount helper to connet to your EFS from two different
      instaces.
    </p>
    <img class="w-3/5 mb-6 m-auto" src="../assets/AWS/efs1.png" />
    <img class="w-3/5 mb-6 m-auto" src="../assets/AWS/efs2.png" />
    <img class="w-3/5 mb-6 m-auto" src="../assets/AWS/efs3.png" />
    <img class="w-3/5 mb-6 m-auto" src="../assets/AWS/efs4.png" />
    <img class="w-3/5 mb-6 m-auto" src="../assets/AWS/efs6.png" />
    <img class="w-3/5 mb-10 m-auto" src="../assets/AWS/efs5.png" />

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      Simple Storgae Service (S3) you create a bucket and upload a object. You
      can access your bucket using a URL. You can also connect your instances
      via Internet Gateway or Gateway Endpoint with a private connection.
    </p>
    <img class="w-3/5 mb-6 m-auto" src="../assets/AWS/s3dia.png" />
    <img class="w-3/5 mb-10 m-auto" src="../assets/AWS/s3dia2.png" />

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      You can make S3 bucket from S3 console. The public access setting must be
      customized to be accessed. You can also access and edit your bucket
      througe the AWS CLI.
    </p>
    <img class="w-3/5 mb-6 m-auto" src="../assets/AWS/s3create1.png" />
    <img class="w-3/5 mb-6 m-auto" src="../assets/AWS/s3create2.png" />
    <img class="w-3/5 mb-6 m-auto" src="../assets/AWS/s3create3.png" />
    <img class="w-3/5 mb-6 m-auto" src="../assets/AWS/s3create4.png" />
    <img class="w-3/5 mb-6 m-auto" src="../assets/AWS/s3create5.png" />
    <img class="w-3/5 mb-6 m-auto" src="../assets/AWS/s3create6.png" />
    <img class="w-3/5 mb-10 m-auto" src="../assets/AWS/s3create7.png" />

    <br />
    <!-- Database -->
    <div class="max-w-lg mx-auto mb-4">
      <div
        class="text-3xl font-bold text-yellow-300 hover:text-yellow-500 mb-2"
      >
        <p>
          6. Database (RDS & DynamoDB)
        </p>
      </div>
    </div>

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      Relational Database Service (RDS) has more rigid schema compared to
      non-relational. In RDS, you need to follow the rows and columns that are
      defined throught out. It runs on EC2 instance which can effect the cost of
      running. You can manage the database through EC2 or RDS itself. And each
      has its own advantages and disadvantage.
    </p>
    <img class="w-3/5 mb-10 m-auto" src="../assets/AWS/rdsdia1.png" />

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      RDS can be scaled vertically or horizontally. With the horizontal scaling
      you can add Disaster Recovery (DR). It is done by replicating the Master
      RDS as a Standby RDS. Read Replica is for reading only or for traffic
      control. The App Server read from the Read Replica and writer to the
      master.
    </p>
    <img class="w-3/5 mb-6 m-auto" src="../assets/AWS/rdsdiaver.png" />
    <img class="w-3/5 mb-10 m-auto" src="../assets/AWS/rdsdiahor.png" />

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      You can configure RDS from the RDS console. When you are creating the
      database, you can set maintenance schedule. After creating th database you
      can view the details of your database.
    </p>
    <img class="w-3/5 mb-6 m-auto" src="../assets/AWS/rdscreate.png" />
    <img class="w-3/5 mb-6 m-auto" src="../assets/AWS/rdsmaint.png" />
    <img class="w-3/5 mb-6 m-auto" src="../assets/AWS/rdssumm.png" />
    <img class="w-3/5 mb-10 m-auto" src="../assets/AWS/rdsstat.png" />

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      At this stage you don't have the Multi-AZ (Disaster Recovery) enabled. You
      need to go to modify to set up the Multi-AZ to backup of your database.
      Compare to excuting this operation by yourself this is a very simple way
      to back-up your data.
    </p>
    <img class="w-3/5 mb-6 m-auto" src="../assets/AWS/rdsmaz.png" />
    <img class="w-3/5 mb-10 m-auto" src="../assets/AWS/rdsmazsuc.png" />

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      For the read replica, you need to go through similar to setting up the
      Multi-AZ except applying identifier.
    </p>
    <img class="w-3/5 mb-10 m-auto" src="../assets/AWS/rdsrepli.png" />

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      Ther are more features such as automated backup and snapshot
    </p>
    <br />

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      DynamoDB is created by Amazon therefore it is very well supported by AWS.
    </p>
    <img class="w-3/5 mb-6 m-auto" src="../assets/AWS/dynadia.png" />
    <img class="w-3/5 mb-10 m-auto" src="../assets/AWS/dynatable.png" />

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      When creating DynamoDB, you need to set priamry and sort keys manually.
      And it also features auto-scaling and encrytion .
    </p>
    <img class="w-3/5 mb-6 m-auto" src="../assets/AWS/dynacreate.png" />
    <img class="w-3/5 mb-10 m-auto" src="../assets/AWS/dynascale.png" />

    <br />

    <!-- 3:35 -->
    <!-- <p class="text-lg text-white mb-8 w-3/5 m-auto">
      Cloud Formation .
    </p>
    <img class="w-3/5 mb-6 m-auto" src="../assets/AWS/dynadia.png" /> -->

    <!-- Terminal 1 -->
    <div class="w-3/5 mx-auto text-left">
      <div
        class="w-full shadow-2xl subpixel-antialiased rounded h-36 bg-gray-500 border-black mx-auto"
      >
        <div
          class="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black"
          id="headerTerminal"
        >
          <div
            class="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3"
            id="closebtn"
          ></div>
          <div
            class="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3"
            id="minbtn"
          ></div>
          <div
            class="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3"
            id="maxbtn"
          ></div>
          <div class="mx-auto pr-16" id="terminaltitle">
            <p class="text-center text-sm">Terminal</p>
          </div>
        </div>
        <div
          class="pl-1 pt-1 text-green-200 font-mono text-base bg-gray-500"
          id="console"
        >
          <p class="pb-1 px-1">
            daniel$ to be continued... <br />
            daniel$
          </p>
        </div>
      </div>
    </div>
    <!-- Terminal 1 Ends -->
  </div>
</template>
